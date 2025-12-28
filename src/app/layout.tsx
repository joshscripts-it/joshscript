import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "joshscript - Fullstack Web & Mobile App Developer",
  description:
    "Portfolio of joshscript - Expert in Next.js, React, JavaScript, and React Native. Building modern web and mobile applications.",
  keywords: [
    "fullstack developer",
    "web developer",
    "mobile developer",
    "next.js",
    "react",
    "react-native",
  ],
  authors: [{ name: "joshscript" }],
  openGraph: {
    type: "website",
    url: "https://joshscript.dev",
    title: "joshscript - Fullstack Web & Mobile Developer",
    description: "Expert in Next.js, React, JavaScript, and React Native",
    images: [
      {
        url: "https://joshscript.dev/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Tailwind CDN fallback while PostCSS/Turbopack issues are resolved */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
