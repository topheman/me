import { Metadata } from "next";

type Input = {
  title?: string;
  description?: string;
  keywords?: string[];
  websiteBaseUrl?: string;
  imagePath?: string;
  twitterHandle?: string;
};

export function getMetadata({
  title,
  description,
  keywords,
  websiteBaseUrl = process.env.NEXT_PUBLIC_WEBSITE_BASE_URL,
  imagePath,
  twitterHandle,
}: Input): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: websiteBaseUrl,
      type: "website",
      siteName: title,
      images: imagePath
        ? [{ url: `${websiteBaseUrl}${imagePath}` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imagePath ? [`${websiteBaseUrl}${imagePath}`] : undefined,
      creator: twitterHandle,
      site: twitterHandle,
    },
  };
}
