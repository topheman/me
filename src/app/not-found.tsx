"use client";

import Image from "next/image";
import Link from "next/link";

import ChromeIcon from "@/images/Chrome.svg";
import FirefoxIcon from "@/images/Firefox.svg";
import SafariIcon from "@/images/Safari.svg";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-200px)] w-full flex flex-col items-center justify-center p-4">
      <div className="nf_browsers-container">
        <div className="nf_browser-icon">
          <Image
            src={ChromeIcon}
            alt="Chrome browser"
            width={80}
            height={80}
            priority
          />
        </div>
        <div className="nf_browser-icon">
          <Image
            src={FirefoxIcon}
            alt="Firefox browser"
            width={80}
            height={80}
            priority
          />
        </div>
        <div className="nf_browser-icon">
          <Image
            src={SafariIcon}
            alt="Safari browser"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>

      <div className="nf_text-content text-center">
        <p className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          Are you lost? 😉
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-lg text-primary
                   font-medium transition-colors duration-200 nf_hover-scale"
        >
          <span className="text-xl">👈</span> Return Home
        </Link>
      </div>
    </div>
  );
}
