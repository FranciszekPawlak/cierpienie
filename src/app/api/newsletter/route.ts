import { NextResponse } from "next/server";

interface NewsletterRequest {
  email: string;
  recaptchaToken: string;
}

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

const RECAPTCHA_ACTION = "newsletter_subscribe";
const RECAPTCHA_MIN_SCORE = 0.5;
const MAX_EMAIL_LENGTH = 254;
const MAX_TOKEN_LENGTH = 2048;

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("CRITICAL: RECAPTCHA_SECRET_KEY not set in production");
      return false;
    }
    console.warn("RECAPTCHA_SECRET_KEY not set, skipping verification in development");
    return true;
  }

  if (!token || token.length > MAX_TOKEN_LENGTH) {
    return false;
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", secretKey);
    params.append("response", token);

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      return false;
    }

    if (data.action !== RECAPTCHA_ACTION) {
      return false;
    }

    if (data.score !== undefined && data.score < RECAPTCHA_MIN_SCORE) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

function isValidEmail(email: string): boolean {
  if (email.length > MAX_EMAIL_LENGTH) {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

async function addToBrevo(email: string): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("CRITICAL: BREVO_API_KEY not set in production");
      return { success: false, error: "Błąd konfiguracji serwera" };
    }
    console.warn("BREVO_API_KEY not set, skipping Brevo integration in development");
    return { success: true };
  }

  try {
    const body: {
      email: string;
      listIds?: number[];
      updateEnabled: boolean;
    } = {
      email,
      updateEnabled: true,
    };

    if (listId) {
      const parsedListId = Number.parseInt(listId, 10);
      if (!Number.isNaN(parsedListId)) {
        body.listIds = [parsedListId];
      }
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(body),
    });

    if (response.status === 201 || response.status === 204) {
      return { success: true };
    }

    const data = await response.json();

    if (data.code === "duplicate_parameter") {
      return { success: true };
    }

    console.error("Brevo API error:", data);
    return { success: false, error: data.message || "Błąd API Brevo" };
  } catch (error) {
    console.error("Brevo integration error:", error);
    return { success: false, error: "Błąd połączenia z Brevo" };
  }
}

export async function POST(request: Request) {
  try {
    const body: NewsletterRequest = await request.json();
    const { email: rawEmail, recaptchaToken } = body;

    const email = rawEmail?.trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Podaj prawidłowy adres email" },
        { status: 400 }
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Weryfikacja nie powiodła się. Spróbuj ponownie." },
        { status: 400 }
      );
    }

    const brevoResult = await addToBrevo(email);
    if (!brevoResult.success) {
      return NextResponse.json(
        { error: brevoResult.error || "Nie udało się zapisać do newslettera" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Zapisano do newslettera!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "Wystąpił nieoczekiwany błąd" },
      { status: 500 }
    );
  }
}
