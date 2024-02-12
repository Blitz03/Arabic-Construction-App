import Image from "next/image";

export default function WorkCard({ work }) {
  return (
    <>
      {/* <div className="flex flex-col gap-5 w-full md:max-w-[360px] text-center"> */}
      {/* Image Wrapper */}
      <div className="h-[360px] w-full md:w-[360px] relative">
        <Image
          src={work.imageUrl}
          alt="work"
          fill
          className="object-cover md:object-contain rounded-[20px]"
        />
      </div>
      {/* Image Wrapper */}
      {/* </div> */}
    </>
  );
}
