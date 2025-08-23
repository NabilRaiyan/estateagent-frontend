// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";
import I18nextProviderWrapper from "./components/ui/I18nextProviderWrapper";
import Breadcrumbs from "./components/ui/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NestifyBD | Real Estate, Buy, Sell, Rent Property In Bangladesh",
  description:
    "NestifyBD agents are among the most experienced in the industry and can help you win in today's market. Find an agent. alt. Mortgage. Rocket Mortgage delivers .",
};

// Since lang depends on i18n language, we keep <html lang="en"> static here,
// but you can manage it dynamically inside your client components (like LanguageSwitcher).

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Breadcrumbs/>
        <I18nextProviderWrapper>
          <AOSProvider>{children}</AOSProvider>
        </I18nextProviderWrapper>
      </body>
    </html>
  );
}
