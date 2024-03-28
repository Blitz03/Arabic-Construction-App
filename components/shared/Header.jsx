"use client";

import Link from "next/link";
import Image from "next/image";

import Hamburger from "./Hamburger";
import { links } from "@/constants";

export default function Header() {
  return (
    <header>
      <div className="min-h-[75px] flex items-center py-2">
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-secondary-950 text-base-semibold">
            <Image
              src="/assets/logo.png"
              alt="شعار شركة النهضة للبناء في الكويت"
              width={96}
              height={96}
              className="object-contain"
            />
          </Link>

          {/* Links */}
          <ul className="hidden lg:flex justify-center items-center gap-12 flex-1 text-base-semibold">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="header-link">
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="https://maps.app.goo.gl/YYPKvsPGU1u5fVxe9"
                className="w-[24px] h-[24px] flex justify-center relative"
                target="_blank">
                <Image
                  src="/assets/location-primary.svg"
                  alt="location"
                  fill
                  className="object-contain icon"
                />
              </Link>
            </li>

            <li>
              <Link
                href="tel:+96550464650"
                className="w-[24px] h-[24px] flex justify-center relative">
                <Image
                  src="/assets/call-primary.svg"
                  alt="call"
                  fill
                  className="object-contain icon"
                />
              </Link>
            </li>
          </ul>
          {/* Links */}

          {/* Hamburger Menu */}
          <Hamburger />
          {/* Hamburger Menu */}
        </div>
      </div>
    </header>
  );
}
