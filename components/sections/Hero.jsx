import Image from "next/image";
import ButtonComponent from "../shared/ButtonComponent";

export default function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-[523px] sm:min-h-[800px] bg-secondary-950">
      <div className="container min-h-[523px] sm:min-h-screen flex">
        {/* Content Wrapper */}
        <div className="flex flex-col flex-1 flex-between items-center justify-center lg:items-start text-center lg:text-start gap-20">
          <h1 className="text-white text-h1-mobile-bold sm:text-h1-bold max-w-[474px]">
            بناء أحلامك: الجودة والابتكار في عالم المنازل
          </h1>
          <ButtonComponent href="#works" content="أنظر الى المزيد" />
        </div>
        {/* Content Wrapper */}

        {/* Image Wrapper */}
        <div className="hidden lg:flex items-end">
          <Image
            src="/assets/engineer.png"
            alt="engineer"
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
