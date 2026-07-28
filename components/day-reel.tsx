"use client";

import Link from "next/link";
import { useRef, useState } from "react";
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
  const [activeItem, setActiveItem] = useState<DayReelItem>(items[0]);

  return (
    <div className="day-reel mt-9 space-y-1 sm:mt-11" aria-label="Moments from a day">
      <div className="day-reel-row day-reel-row-top">
        {topRow.map((item, index) => (
          <DayReelFrame
            key={`top-${item.time}-${index}`}
            item={item}
            onActivate={setActiveItem}
          />
        ))}
      </div>
      <div className="day-reel-row day-reel-row-bottom">
        {bottomRow.map((item, index) => (
          <DayReelFrame
            key={`bottom-${item.time}-${index}`}
            item={item}
            onActivate={setActiveItem}
          />
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-4 sm:px-10">
        <div className="day-reel-footnote">
          <p className="text-[10px] uppercase tracking-[0.26em] text-[#5e686d]">
            Hover note
          </p>
          <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#445154]">
              {activeItem.time} / {activeItem.place}
            </span>
            <p className="max-w-2xl [font-family:var(--font-display)] text-lg text-[#2e3434] sm:text-[1.4rem]">
              {activeItem.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DayReelFrame({
  item,
  onActivate,
}: {
  item: DayReelItem;
  onActivate: (item: DayReelItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function playPreview() {
    onActivate(item);
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
      onFocus={playPreview}
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
