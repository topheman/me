import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMetadata } from "@/utils/metadata";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...getMetadata({
    title: "Christophe Rosset (topheman) - Developer Portfolio",
    description:
      "Showcasing personal projects and talks by Christophe Rosset (topheman), a passionate developer with expertise in JavaScript, TypeScript, React, Node.js, and Rust.",
    imagePath: "/social-media-preview.png",
    twitterHandle: "@topheman",
  }),
  // the icons are hosted on topheman.github.io -> this is where the absolute path leads to
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-64x64.png", sizes: "64x64" },
      { url: "/favicon-128x128.png", sizes: "128x128" },
      { url: "/favicon-144x144.png", sizes: "144x144" },
      { url: "/favicon-192x192.png", sizes: "192x192" },
      { url: "/favicon-256x256.png", sizes: "256x256" },
      { url: "/favicon-384x384.png", sizes: "384x384" },
      { url: "/favicon-512x512.png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
};

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
