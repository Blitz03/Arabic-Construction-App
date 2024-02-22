"use client";

import { useState } from "react";
import Image from "next/image";

import Menu from "@/components/ui/menu";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/assets/hamburger.svg"
          alt="hamburger"
          width={30}
          height={20}
          className="object-contain"
        />
      </button>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
        {/* Links */}
        <ul className="pt-14 flex flex-col gap-5 sm:gap-10 text-secondary-950 text-body-medium">
          <li className="header-link">
            <a href="/#" onClick={() => setIsOpen(false)}>
              القسم الرئيسي
            </a>
          </li>

          <li className="header-link">
            <a href="/#services" onClick={() => setIsOpen(false)}>
              خدماتنا
            </a>
          </li>

          <li className="header-link">
            <a href="/#about" onClick={() => setIsOpen(false)}>
              من نحن
            </a>
          </li>

          <li className="header-link">
            <a href="/#works" onClick={() => setIsOpen(false)}>
              أعمالنا
            </a>
          </li>

          <li className="header-link">
            <a href="/offers" onClick={() => setIsOpen(false)}>
              عروضنا
            </a>
          </li>

          <li className="header-link">
            <a href="/#contact" onClick={() => setIsOpen(false)}>
              تواصل معنا
            </a>
          </li>

          <li className="header-link">
            <a
              href="tel:+96550464650"
              className="flex items-center gap-5"
              onClick={() => setIsOpen(false)}>
              الأتصال
              <Image
                src="/assets/call-primary.svg"
                alt="call"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
          </li>

          <li className="header-link">
            <a
              href="https://maps.app.goo.gl/YYPKvsPGU1u5fVxe9"
              className="flex items-center gap-5"
              target="_blank"
              onClick={() => setIsOpen(false)}>
              الموقع
              <Image
                src="/assets/location-primary.svg"
                alt="call"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
          </li>
        </ul>
        {/* Links */}
      </Menu>
    </div>
  );
}
