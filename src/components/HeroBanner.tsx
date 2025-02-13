import { Github, Linkedin, Twitter } from "lucide-react";
import { memo } from "react";

import CustomQRCode from "./CustomQRCode";

const HeroBanner = memo(function HeroBanner() {
  return (
    <section className="bg-gray-100 pt-20 pb-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
            Hi, I'm Christophe Rosset
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 animate-fade-in-up animation-delay-300">
            I'm a passionate developer with expertise in JavaScript, TypeScript,
            React, Node.js, and Rust. I love building projects that challenge me
            and solve real-world problems.
          </p>
          <div className="flex flex-col items-center md:items-start animate-fade-in-up animation-delay-600">
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/topheman"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#900000] hover:bg-[#900000]/70 text-white rounded-full inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base transition-colors duration-300 animate-bounce-in animation-delay-900"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/topheman/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#900000] hover:bg-[#900000]/70 text-white rounded-full inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base transition-colors duration-300 animate-bounce-in animation-delay-1000"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/topheman"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#900000] hover:bg-[#900000]/70 text-white rounded-full inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base transition-colors duration-300 animate-bounce-in animation-delay-1100"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="animate-scale-in animation-delay-1000">
          <CustomQRCode payload="http://dev.topheman.com/my-projects/" />
        </div>
      </div>
      <div className="absolute inset-0 z-0 animate-bg-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-red-100 opacity-50"></div>
      </div>
    </section>
  );
});

export default HeroBanner;
