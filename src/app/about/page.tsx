import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BlueskyIcon } from "@/components/BlueskyIcon";
import { StackOverflowIcon } from "@/components/StackOverflowIcon";
import portrait from "@/images/portrait.png";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20 max-w-[65ch]">
      <h1 className="text-3xl font-bold mb-8 text-[#900000]">About Me</h1>
      <div className="md:bg-white md:shadow-lg rounded-lg overflow-hidden max-w-[65ch] mx-auto">
        <div className="md:p-6">
          <div className="flex items-center mb-6">
            <Image
              src={portrait}
              alt="Portrait of Christophe Rosset"
              width={120}
              height={120}
              className="rounded-full mr-6 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 animate-name-slide">
                Christophe Rosset
              </h2>
              <p className="text-gray-600 animate-title-fade">
                Software Engineer • Paris, France
              </p>
            </div>
          </div>
          <div className="prose">
            <p>
              Hi, I'm Christophe Rosset, a software engineer living in Paris,
              France.
            </p>
            <p>
              I help teams manage technical debt and guide developers by sharing
              development best practices through documentation, workshops, and
              implementing specific tools.
            </p>
            <p>
              With over 20 years of experience in web development across
              different technologies, I continue to stay current in my
              Frontend/JavaScript expertise and more recently in
              Rust/WebAssembly 🦀 by staying active in the tech community,
              attending meetups, working on personal projects, and contributing
              to open source.
            </p>
            <p>
              My personal projects are available on this website, along with
              talks I gave at conferences and meetups.
            </p>
            <p>
              If you want to know more about my professional journey, you can
              check my LinkedIn profile.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4">
          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/topheman"
              className="text-[#900000] opacity-70 hover:opacity-100 transition-opacity duration-300"
              title="Visit my GitHub profile"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/topheman/"
              className="text-[#900000] opacity-70 hover:opacity-100 transition-opacity duration-300"
              title="Connect with me on LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="https://x.com/topheman"
              className="text-[#900000] opacity-70 hover:opacity-100 transition-opacity duration-300"
              title="Follow me on Twitter"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="https://bsky.app/profile/topheman.bsky.social"
              className="text-[#900000] opacity-70 hover:opacity-100 transition-opacity duration-300"
              title="Follow me on Bluesky"
            >
              <span className="sr-only">Bluesky</span>
              <BlueskyIcon stroke="#900000" height={24} width={24} />
            </Link>
            <Link
              href="https://stackoverflow.com/users/2733488/topheman"
              className="text-[#900000] opacity-70 hover:opacity-100 transition-opacity duration-300"
              title="Visit my Stack Overflow profile"
            >
              <span className="sr-only">Stack Overflow</span>
              <StackOverflowIcon
                stroke="#900000"
                height={24}
                width={24}
                strokeWidth={0.05}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
