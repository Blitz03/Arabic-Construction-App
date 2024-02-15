import Image from "next/image";

export default function WorkCard({ work }) {
  return (
    <>
      {/* Image Wrapper */}
      <div className="h-[360px] w-full md:w-[360px] relative">
        <Image
          src={work.imageUrl}
          alt={work.alt}
          fill
          className="object-cover md:object-contain rounded-[20px]"
        />
      </div>
      {/* Image Wrapper */}
    </>
  );
}
