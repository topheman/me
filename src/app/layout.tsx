import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import Header from "@/src/components/Header"
import Footer from "@/src/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christophe Rosset - Developer Portfolio",
  description:
    "Showcasing personal projects and talks by Christophe Rosset, a passionate developer with expertise in JavaScript, TypeScript, React, Node.js, and Rust.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
