import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="social-media flex flex-row lg:flex-col gap-5 sm:gap-10 items-center justify-center">
      <Link
        href="https://maps.app.goo.gl/YYPKvsPGU1u5fVxe9"
        target="_blank"
        className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex justify-center relative">
        <Image
          src="/assets/location-gray.svg"
          alt="location"
          fill
          className="object-contain"
        />
      </Link>

      <Link
        href="https://www.snapchat.com/add/fateh.alden94"
        target="_blank"
        className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex justify-center relative">
        <Image
          src="/assets/snapchat-gray.svg"
          alt="snapchat"
          fill
          className="object-contain"
        />
      </Link>

      <Link
        href="https://www.instagram.com/alnahdakw/"
        target="_blank"
        className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex justify-center relative">
        <Image
          src="/assets/instagram-gray.svg"
          alt="instagram"
          fill
          className="object-contain"
        />
      </Link>

      <Link
        href="https://www.facebook.com/"
        target="_blank"
        className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex justify-center relative">
        <Image
          src="/assets/facebook-gray.svg"
          alt="facebook"
          fill
          className="object-contain"
        />
      </Link>

      <Link
        href="tel:+96550464650"
        className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex justify-center relative">
        <Image
          src="/assets/call-gray.svg"
          alt="call"
          fill
          className="object-contain"
        />
      </Link>

      <Link
        href="mailto:fatehalden6@gmail.com"
        className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] flex justify-center relative">
        <Image
          src="/assets/message-gray.svg"
          alt="message"
          fill
          className="object-contain"
        />
      </Link>
    </div>
  );
}
