"use client";

import Link from "next/link";
import { useRef } from "react";
import { withBasePath } from "@/lib/site";

type DayReelItem = {
  time: string;
  place: string;
  note: string;
  imageSrc: string;
  imagePosition: string;
  href: string;
  videoSrc?: string;
};

export default function DayReel({ items }: { items: DayReelItem[] }) {
  return (
    <div className="day-reel mt-9 sm:mt-11" aria-label="A day in four moments">
      <div className="day-reel-track">
        {[...items, ...items].map((item, index) => (
          <DayReelFrame key={`${item.time}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function DayReelFrame({ item }: { item: DayReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function playPreview() {
    void videoRef.current?.play();
  }

  function stopPreview() {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <Link
      href={item.href}
      className="day-reel-frame"
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath(item.imageSrc)}
        alt=""
        className="day-reel-image"
        style={{ objectPosition: item.imagePosition }}
      />
      {item.videoSrc && (
        <video
          ref={videoRef}
          className="day-reel-video"
          src={withBasePath(item.videoSrc)}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
      )}
      <div className="day-reel-caption">
        <span>{item.time}</span>
        <span>{item.place}</span>
        <p>{item.note}</p>
      </div>
    </Link>
  );
}
