import Link from "next/link";

import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";

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
          <ul className="hidden md:flex justify-center items-center gap-12 flex-1 text-base-semibold">
            <li>
              <Link href="/#" className="header-link">
                القسم الرئيسي
              </Link>
            </li>

            <li>
              <Link href="/#services" className="header-link">
                خدماتنا
              </Link>
            </li>

            <li>
              <Link href="/#about" className="header-link">
                من نحن
              </Link>
            </li>

            <li>
              <Link href="/#works" className="header-link">
                أعمالنا
              </Link>
            </li>

            <li>
              <Link href="/#contact" className="header-link">
                تواصل معنا
              </Link>
            </li>

            <li>
              <Link
                href="/"
                target="_blank"
                className="w-[24px] h-[24px] flex justify-center relative">
                <Image
                  src="/assets/location-primary.svg"
                  alt="location"
                  fill
                  className="object-contain"
                />
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="w-[24px] h-[24px] flex justify-center relative">
                <Image
                  src="/assets/call-primary.svg"
                  alt="call"
                  fill
                  className="object-contain"
                />
              </Link>
            </li>
          </ul>
          {/* Links */}

          {/* Hamburger Menu */}
          <HamburgerMenu />
          {/* Hamburger Menu */}
        </div>
      </div>
    </header>
  );
}
