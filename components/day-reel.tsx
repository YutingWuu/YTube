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
  orientation?: "portrait" | "landscape";
  row?: 1 | 2;
  videoSrc?: string;
};

export default function DayReel({ items }: { items: DayReelItem[] }) {
  const topRow = items.filter((item) => item.row !== 2);
  const bottomRow = items.filter((item) => item.row === 2);

  return (
    <div className="day-reel mt-9 space-y-1 sm:mt-11" aria-label="Moments from a day">
      <div className="day-reel-row day-reel-row-top">
        {[...topRow, ...topRow].map((item, index) => (
          <DayReelFrame key={`top-${item.time}-${index}`} item={item} />
        ))}
      </div>
      <div className="day-reel-row day-reel-row-bottom">
        {[...bottomRow, ...bottomRow].map((item, index) => (
          <DayReelFrame key={`bottom-${item.time}-${index}`} item={item} />
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
      className={`day-reel-frame ${
        item.orientation === "portrait"
          ? "day-reel-frame--portrait"
          : "day-reel-frame--landscape"
      }`}
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
