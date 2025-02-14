import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMetadata } from "@/utils/metadata";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = getMetadata({
  title: "Christophe Rosset (topheman) - Developer Portfolio",
  description:
    "Showcasing personal projects and talks by Christophe Rosset (topheman), a passionate developer with expertise in JavaScript, TypeScript, React, Node.js, and Rust.",
  imagePath: "/social-media-preview.png",
  twitterHandle: "@topheman",
});

export const viewport: Viewport = {
  themeColor: "#900000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
