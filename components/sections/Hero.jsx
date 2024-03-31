"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";

import ButtonComponent from "../shared/ButtonComponent";
import { animateHero } from "@/lib/animations";

export default function Hero() {
  useGSAP(() => {
    animateHero();
  }, []);

  return (
    <section className="bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-screen bg-secondary-950 overflow-hidden">
      <div className="container min-h-screen flex">
        {/* Content Wrapper */}
        <div className="flex flex-col flex-1 flex-between items-center justify-center lg:items-start text-center lg:text-start gap-16">
          <div>
            <h1
              id="hero-title"
              className="text-white text-h1-mobile-bold sm:text-h1-bold max-w-[474px]">
              النهضة: الشركة الرائدة في مجال البناء في الكويت
            </h1>

            <p
              id="hero-paragraph"
              className="text-base-medium text-gray-300 mt-8">
              تأسست عام 1963 مصنفة فئة (أ) لدى بلدية الكويت
            </p>
          </div>

          <div className="flex gap-5">
            <ButtonComponent
              id="hero-button"
              text="أنظر الى المزيد"
              className="z-1"
              href="#about"
            />

            <ButtonComponent
              id="hero-button"
              text="عروضنا"
              className="z-1"
              href="/offers"
              variant="button-white"
            />
          </div>
        </div>
        {/* Content Wrapper */}

        {/* Image Wrapper */}
        <div className="hidden lg:flex items-end">
          <Image
            id="hero-image"
            src="/assets/engineer.png"
            alt="شركة النهضة للبناء في الكويت"
            width={506}
            height={663}
            className="object-contain"
          />
        </div>
        {/* Image Wrapper */}
      </div>
    </section>
  );
}
