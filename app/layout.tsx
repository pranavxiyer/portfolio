import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant',
  weight: ['300', '400', '600'],
  subsets: ['latin'],
})

const ebGaramond = EB_Garamond({
  variable: '--font-garamond',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav Iyer",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${cormorantGaramond.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
