import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { RecaptchaProvider } from "@/components/RecaptchaProvider";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cierpienie",
  description: "cierpienie.club",
  metadataBase: new URL("https://cierpienie.club"),
  openGraph: {
    title: "Cierpienie",
    description: "cierpienie.club",
    url: "https://cierpienie.club",
    siteName: "Cierpienie",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cierpienie Logo",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cierpienie",
    description: "cierpienie.club",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${googleSansFlex.variable} bg-black font-sans text-white antialiased`}
      >
        <BackgroundEffects />
        <RecaptchaProvider>{children}</RecaptchaProvider>
        <footer className="my-2 text-center text-xs">
          <span className="text-white/40">
            created by{" "}
            <a
              className="underline hover:text-white/80"
              href="https://franciszekpawlak.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              franciszekpawlak.pl
            </a>{" "}
            <span className="mx-2">|</span> cierpienie.club
            <span className="mx-2">|</span> 2026
          </span>
        </footer>
      </body>
    </html>
  );
}
