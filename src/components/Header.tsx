"use client";

import { FolderOpenDot, Youtube, User } from "lucide-react";
import Link from "next/link";

import { useScrollVisibility } from "@/hooks/useScrollVisibility";

export default function Header() {
  const isVisible = useScrollVisibility();

  return (
    <header
      className={`bg-[#900000] text-white py-4 shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="flex items-center hover:underline">
              <FolderOpenDot className="w-5 h-5 mr-2" />
              Projects
            </Link>
          </li>
          <li>
            <Link href="/talks" className="flex items-center hover:underline">
              <Youtube className="w-5 h-5 mr-2" />
              Talks
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center hover:underline">
              <User className="w-5 h-5 mr-2" />
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
