"use client";

import { useCallback, useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type FormStatus = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();
  const isSubmittingRef = useRef(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (isSubmittingRef.current) {
        return;
      }

      if (!email) {
        setErrorMessage("Podaj adres email");
        setStatus("error");
        return;
      }

      if (!executeRecaptcha) {
        setErrorMessage("reCAPTCHA nie jest dostępne. Odśwież stronę.");
        setStatus("error");
        return;
      }

      isSubmittingRef.current = true;
      setStatus("loading");
      setErrorMessage("");

      try {
        const recaptchaToken = await executeRecaptcha("newsletter_subscribe");

        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            recaptchaToken,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Wystąpił błąd");
        }

        setStatus("success");
        setEmail("");
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "Wystąpił błąd",
        );
      } finally {
        isSubmittingRef.current = false;
      }
    },
    [email, executeRecaptcha],
  );

  const handleRetry = useCallback(() => {
    setStatus("idle");
    setErrorMessage("");
  }, []);

  if (status === "success") {
    return (
      <div className="flex animate-fade-in-up flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
          <svg
            className="h-6 w-6 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-center text-neutral-300">Dziękujemy za zapis!</p>
        <p className="text-center text-neutral-500 text-sm">
          Powiadomimy Cię o starcie.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <div className="group relative">
          <div
            className="-inset-0.5 absolute rounded-full bg-green-500/20 opacity-0 blur transition-opacity duration-300 group-focus-within:opacity-100"
            aria-hidden="true"
          />

          <div className="relative flex items-center rounded-full border border-neutral-700/50 bg-neutral-900/80 backdrop-blur-sm transition-colors duration-300 focus-within:border-green-500/50">
            <div className="pointer-events-none pl-4">
              <svg
                className="h-5 w-5 text-neutral-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Twój email"
              disabled={status === "loading"}
              className="flex-1 bg-transparent px-3 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
              aria-label="Adres email"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="mr-1.5 flex items-center gap-2 whitespace-nowrap rounded-full bg-green-600 px-4 py-2 font-medium text-sm text-white transition-all duration-300 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:cursor-not-allowed disabled:opacity-50 sm:px-5"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Zapisuję...</span>
                </>
              ) : (
                <>
                  <span>Zapisz się</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {status === "error" && errorMessage && (
          <div className="mt-2 flex animate-fade-in-up flex-col items-center gap-1">
            <p className="text-center text-red-400 text-sm">{errorMessage}</p>
            <button
              type="button"
              onClick={handleRetry}
              className="text-neutral-400 text-xs underline transition-colors hover:text-neutral-300"
            >
              Spróbuj ponownie
            </button>
          </div>
        )}
      </div>

      <p className="mt-3 text-center text-neutral-600 text-xs">
        Chronione przez reCAPTCHA.{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-500"
        >
          Prywatność
        </a>
        {" · "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-neutral-500"
        >
          Warunki
        </a>
      </p>
    </form>
  );
}
