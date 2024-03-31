import Image from "next/image";
import Link from "next/link";
import Video from "../ui/video";

import { CldImage } from "next-cloudinary";

export default function WorkCard({ work }) {
  return work.type === "image" ? (
    <Link
      id="work-card"
      href={work.link ? work.link : ""}
      style={{ pointerEvents: work.link ? "auto" : "none" }}
      className="work-card"
      target="_blank">
      {work.isFeatured ? (
        <Image
          src={work.url}
          alt={work.alt}
          fill
          className="object-cover rounded-[20px] hover:scale-110 transition-all work-image"
        />
      ) : (
        <CldImage
          src={work.url}
          alt={work.alt}
          fill
          className="object-cover rounded-[20px] hover:scale-110 transition-all work-image"
        />
      )}

      {work.isFeatured && (
        <Image
          src="/assets/star.svg"
          alt="star"
          width={32}
          height={32}
          className="absolute top-4 left-4"
        />
      )}

      {work.link && (
        <div className="flex justify-center items-center gap-2 flex-wrap absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 p-2 bg-secondary-950">
          <Image
            src="/assets/location-primary.svg"
            alt="location"
            width={24}
            height={24}
            className="object-contain"
          />

          <p className="text-center text-body-semibold text-white drop-shadow-2xl">
            اضغط هنا لتصفح الموقع
          </p>
        </div>
      )}
    </Link>
  ) : (
    <Video
      id="work-card"
      url={work.url}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-[30%] relative overflow-hidden cursor-pointer"
    />
  );
}
