import Image from "next/image";
import Subheader from "../shared/Subheader";
import ButtonComponent from "../shared/ButtonComponent";

export default function About() {
  return (
    <section className="py-10" id="about">
      <div className="container">
        <Subheader text="من نحن؟" />

        {/* Content Wrapper */}
        <div className="flex flex-wrap items-center justify-center text-center lg:text-right gap-10 sm:gap-28">
          <div className="about-image_wrapper">
            <Image
              src="/assets/about-01.jpg"
              alt="about"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>

          <div className="max-w-[500px]">
            <h2 className="text-h2-mobile-bold sm:text-h2-bold sm:text-secondary-950 max-w-[500px]">
              <span className="text-h1-mobile-bold sm:text-h1-bold text-primary-500">
                شركة
              </span>{" "}
              مؤسسة النهضة للتجارة والمقاولات العامة
            </h2>

            <p className="paragraph mt-8">
              تأسست شركة مؤسسة النهضة للتجارة والمقاولات العامة ذ ذ م في
              <strong> 04/30/1963</strong> وهي شركة كويتية مملوكة لشركاء كويتيين
              وقد بدأت اول مشروعها ببناء قسائم السكن الخاص والسكن الاستثماري
              وحصلت الشركة على تصنيف بلدية الكويت الفئة <strong>(أ)</strong> كما
              حصلت الشركة على تصنيف لجنة المناقصات المركزية
            </p>

            <ButtonComponent
              content="أنظر الى المزيد"
              className="z-1 mt-8"
              href="/about"
            />
          </div>
        </div>
        {/* Content Wrapper */}
      </div>
    </section>
  );
}
