"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function Video({ src, className }) {
  return (
    <div className={`rounded-[20px] ${className ? " " + className : ""}`}>
      <CldVideoPlayer
        src={src}
        className="rounded-[20px]"
        colors={{
          accent: "#cd9f25",
          base: "#151522",
          text: "#cd9f25",
        }}
      />
    </div>
  );
}
