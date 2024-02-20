import Image from "next/image";
import ButtonComponent from "../shared/ButtonComponent";

export default function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-screen bg-secondary-950">
      <div className="container min-h-screen flex">
        {/* Content Wrapper */}
        <div className="flex flex-col flex-1 flex-between items-center justify-center lg:items-start text-center lg:text-start gap-16">
          <div>
            <h1 className="text-white text-h1-mobile-bold sm:text-h1-bold max-w-[474px]">
              النهضة: الشركة الرائدة في مجال البناء في الكويت
            </h1>

            <p className="text-base-medium text-gray-300 mt-8">
              تأسست عام 1963 مصنفة فئة (أ) لدى بلدية الكويت
            </p>
          </div>

          <ButtonComponent href="#works" text="أنظر الى المزيد" />
        </div>
        {/* Content Wrapper */}

        {/* Image Wrapper */}
        <div className="hidden lg:flex items-end">
          <Image
            src="/assets/engineer.png"
            alt="شركة النهضة للبناء في الكويت"
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
