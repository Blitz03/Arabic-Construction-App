"use client";

import { useState, useRef, Suspense } from "react";

export default function Video({ width, height, src, className, poster = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={className}>
        <video
          width={width}
          height={height}
          className="rounded-[20px] object-contain"
          controls
          preload="metadata"
          poster={poster}
          ref={videoRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}>
          <source src={src} type="video/mp4" />
        </video>

        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5em"
              height="5em"
              viewBox="0 0 24 24"
              className="drop-shadow-lg">
              <path
                fill="#e5e5e5"
                d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-2 14.5v-9l6 4.5z"
              />
            </svg>
          </button>
        )}
      </div>
    </Suspense>
  );
}
