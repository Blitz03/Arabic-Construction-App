import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ work }) {
  return (
    <Link
      href={work.link ? work.link : ""}
      style={{ pointerEvents: work.link ? "auto" : "none" }}
      className="aspect-square w-full md:w-1/3 lg:w-[380px] relative overflow-hidden rounded-[20px] cursor-pointer work-card"
      target="_blank">
      <Image
        src={work.imageUrl}
        alt={work.alt}
        fill
        className="object-cover md:object-contain rounded-[20px] hover:scale-110 transition-all work-image"
      />

      {work.isFeatured && (
        <Image
          src="/assets/star.svg"
          alt="star"
          width={32}
          height={32}
          className="absolute top-4 left-4"
        />
      )}
    </Link>
  );
}
