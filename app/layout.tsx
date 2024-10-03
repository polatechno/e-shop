import type { Metadata } from "next";

import { Nunito, Josefin_Sans } from 'next/font/google';

import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { getCanonicalUrl } from "@/utils";

const nunitoDefaultFont = Nunito({ subsets: ['latin'] });
const cuteFont = Josefin_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL(getCanonicalUrl()),
  title: "E-SHOP - Sell your item easy",
  description: "Discover the power of simplicity with this E-SHOP - the ultimate solution for effortless selling products. Unlock convenience and boost your sales.",
  openGraph: {
    images: [`/assets/share-image.png`]
  },
  alternates: {
    canonical: "/",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nunitoDefaultFont.className}>
        <Header font={cuteFont.className} />
        <div className="bg-gray-951 py-12">
          {children}
        </div>
        <Footer font={cuteFont.className} />
      </body>
    </html>
  );
}
