import type { Metadata } from "next";
import { DM_Serif_Display, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Hanken_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Burna Boy | African Giant | Grammy Award Winner",
  description: "Official Website for Burna Boy, the African Giant and Grammy Award winning artist.",
  openGraph: {
    title: "Burna Boy | African Giant | Grammy Award Winner",
    description: "Official Website for Burna Boy, the African Giant and Grammy Award winning artist.",
    images: [
      {
        url: "/images/burna.jpg",
        width: 1200,
        height: 630,
        alt: "Burna Boy",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-body selection:bg-brand-gold selection:text-bg-dark">
        {children}
      </body>
    </html>
  );
}
