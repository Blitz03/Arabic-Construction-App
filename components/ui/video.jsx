"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Video({ url, className, id = "" }) {
  return (
    <div
      id={id}
      className={`rounded-[20px]${className ? " " + className : ""}`}>
      <CldVideoPlayer
        colors={{
          accent: "#cd9f25",
        }}
        className="rounded-[20px]"
        src={url}
        key={url}
      />
    </div>
  );
}
