import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import { RecaptchaProvider } from "@/components/RecaptchaProvider";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Cierpienie",
  description: "Cierpienie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${googleSansFlex.variable} font-sans antialiased`}
      >
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>
    </html>
  );
}
