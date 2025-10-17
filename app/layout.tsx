import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/system";
import { Coiny } from "next/font/google";

const coiny = Coiny({ subsets: ["latin"], weight: ["400"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UMD Dining Menu",
  description: "The UMD dining menu website reimagined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={coiny.className}>
      <body className="min-h-screen">
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
