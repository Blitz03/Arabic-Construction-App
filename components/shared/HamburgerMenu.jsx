import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function HamburgerMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/hamburger.svg"
            alt="hamburger"
            width={30}
            height={20}
            className="object-contain"
          />
        </SheetTrigger>
        <SheetContent>
          {/* Links */}
          <ul className="pt-14 flex flex-col gap-5 text-secondary-950 text-body-medium">
            <li>
              <SheetClose>
                <a href="/#">القسم الرئيسي</a>
              </SheetClose>
            </li>

            <li>
              <SheetClose>
                <a href="/#services">خدماتنا</a>
              </SheetClose>
            </li>

            <li>
              <SheetClose>
                <a href="/#about">من نحن</a>
              </SheetClose>
            </li>

            <li>
              <SheetClose>
                <a href="/#works">أعمالنا</a>
              </SheetClose>
            </li>

            <li>
              <SheetClose>
                <a href="/offers">عروضنا</a>
              </SheetClose>
            </li>

            <li>
              <SheetClose>
                <a href="/#contact">تواصل معنا</a>
              </SheetClose>
            </li>

            <li>
              <SheetClose>
                <a href="/#" className="flex items-center gap-5">
                  الأتصال
                  <Image
                    src="/assets/call-gray.svg"
                    alt="call"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              </SheetClose>
            </li>

            <li>
              <SheetClose>
                <a href="/#contact" className="flex items-center gap-5">
                  الموقع
                  <Image
                    src="/assets/location-gray.svg"
                    alt="call"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              </SheetClose>
            </li>
          </ul>
          {/* Links */}
        </SheetContent>
      </Sheet>
    </div>
  );
}
