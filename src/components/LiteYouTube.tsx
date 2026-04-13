"use client";

import { useState } from "react";
import Image from "next/image";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  poster?: "default" | "hq" | "maxres";
}

const posterMap = {
  default: "hqdefault",
  hq: "hqdefault",
  maxres: "maxresdefault",
} as const;

export const LiteYouTube = ({ videoId, title, poster = "hq" }: LiteYouTubeProps) => {
  const [activated, setActivated] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/${posterMap[poster]}.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-card bg-black">
      {activated ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src={thumbnail}
            alt={title}
            width={1280}
            height={720}
            unoptimized
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <span className="flex h-16 w-24 items-center justify-center rounded-xl bg-red-600 shadow-lg transition-transform group-hover:scale-110 md:h-20 md:w-28">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 md:h-10 md:w-10 fill-white"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
};
