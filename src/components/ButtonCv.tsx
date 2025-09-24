"use client";

import { useState } from "react";

export function ButtonCv({
  className = "",
  pdfPath = "./cv-christophe-rosset.pdf",
}: {
  className?: string;
  pdfPath?: string;
}) {
  const [showPdfLink, setShowPdfLink] = useState(false);

  const sharedClassName = `border-primary text-primary border rounded-full px-2 py-1 transition-opacity duration-300 hover:opacity-70 cursor-pointer text-xs ${className}`;

  if (showPdfLink) {
    return (
      <a
        href={pdfPath}
        title="Download CV"
        className={sharedClassName}
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        Download CV (pdf)
      </a>
    );
  }

  return (
    <span onClick={() => setShowPdfLink(true)} className={sharedClassName}>
      Show CV pdf link
    </span>
  );
}
