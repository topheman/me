import { ExternalLink, Video, Youtube } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { talks, videos } from "@/data/talks";
import { getMetadata } from "@/utils/metadata";

export const metadata: Metadata = getMetadata({
  title: "Christophe Rosset (topheman) - Developer Portfolio",
  description: "Talks I gave at conferences and meetups",
  imagePath: "/social-media-preview-talks.png",
  twitterHandle: "@topheman",
});

export default function TalksPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
      <h1 className="text-3xl font-bold mb-8 text-[#900000]">My Talks</h1>
      <div className="space-y-2 mb-12">
        {talks.map((talk, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-wrap items-center text-sm">
              <h2 className="text-base font-semibold text-[#900000] mr-2 flex items-center">
                {talk.url ? (
                  <Link
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    {talk.title}
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Link>
                ) : (
                  <span>{talk.title}</span>
                )}
                {talk.videoLinks && talk.videoLinks.length > 0 && (
                  <span className="flex items-center ml-2">
                    {talk.videoLinks.map((video, videoIndex) => (
                      <Link
                        key={videoIndex}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#900000] hover:underline inline-flex items-center mr-1"
                        title={video.title}
                      >
                        {video.url.includes("dailymotion.com") ? (
                          <Video
                            className="w-5 h-5"
                            aria-label="Dailymotion video"
                          />
                        ) : (
                          <Youtube
                            className="w-5 h-5"
                            aria-label="YouTube video"
                          />
                        )}
                      </Link>
                    ))}
                  </span>
                )}
              </h2>
              <span className="text-gray-500 mr-2">{talk.date}</span>
              {talk.event && talk.event.name && (
                <>
                  <span className="text-gray-300 mx-1">•</span>
                  {talk.event.url ? (
                    <Link
                      href={talk.event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#900000] hover:underline"
                    >
                      {talk.event.name}
                    </Link>
                  ) : (
                    <span className="text-[#900000]">{talk.event.name}</span>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[#900000]">
        Featured Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#900000] mb-2">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
