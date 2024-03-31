"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Subheader({ text, className }) {
  const scrollRef = useRef();

  useGSAP(
    () => {
      const subheaders = gsap.utils.toArray(scrollRef.current.children);

      gsap.registerPlugin(ScrollTrigger);

      subheaders.forEach((subheader) =>
        gsap.fromTo(
          subheader,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce",
            scrollTrigger: subheader,
          }
        )
      );
    },
    { scope: scrollRef }
  );

  return (
    <div
      id="subheader"
      ref={scrollRef}
      className={`text-center py-16 max-w-fit mx-auto${
        className ? " " + className : ""
      }`}>
      <h2 className="text-h2-semibold pb-2">{text}</h2>
      <div className="h-[4px] w-full bg-primary-500 rounded-full" />
    </div>
  );
}
