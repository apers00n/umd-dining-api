import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/system";
import { Coiny } from "next/font/google";
import { Divider } from "@heroui/divider";

const coiny = Coiny({ subsets: ["latin"], weight: ["400"] });

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
        <HeroUIProvider>
          {children}

          <Divider className="my-10" />
          <div className="px-[17%] pb-20 flex-col flex">
            <p className="text-2xl sm:text-5xl mb-3">Links</p>

            <a
              href="https://github.com/apers00n"
              target="_blank"
              className="sm:text-2xl border-dotted border-b-5 mb-2 w-max"
            >
              Github
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/natan.meyer/"
              className="sm:text-2xl border-dotted border-b-5 mb-2 w-max"
            >
              Instagram
            </a>
            <a
              target="_blank"
              href="mailto:natanameyer@gmail.com"
              className="sm:text-2xl border-dotted border-b-5 mb-2 w-max"
            >
              Contact
            </a>
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}
