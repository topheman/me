"use client";

import { FolderOpenDot, Youtube, User } from "lucide-react";
import Link from "next/link";

import { useScrollVisibility } from "@/hooks/useScrollVisibility";

export default function Header() {
  const isVisible = useScrollVisibility();

  return (
    <header
      className={`bg-[#900000] text-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <ul className="flex">
          <li>
            <Link
              href="/"
              className="flex items-center hover:underline h-14 px-4 sm:px-6 cursor-pointer group"
            >
              <FolderOpenDot className="w-5 h-5 mr-2 group-hover:scale-150 transition-all duration-300" />
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/talks"
              className="flex items-center hover:underline h-14 px-4 sm:px-6 cursor-pointer group"
            >
              <Youtube className="w-5 h-5 mr-2 group-hover:scale-150 transition-all duration-300" />
              Talks
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center hover:underline h-14 px-4 sm:px-6 cursor-pointer group"
            >
              <User className="w-5 h-5 mr-2 group-hover:scale-150 transition-all duration-300" />
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
