import ButtonComponent from "../shared/ButtonComponent";
import Map from "../shared/Map";
import SocialBar from "../shared/SocialBar";
import Subheader from "../shared/Subheader";

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="container">
        <Subheader text="تواصل معنا" />

        {/* Wrapper */}
        <div className="flex flex-wrap items-center gap-10 lg:gap-0">
          {/* Map */}
          <Map />
          {/* Map */}

          {/* Contact Form */}
          <div className="flex items-center flex-wrap justify-center flex-column sm:flex-row">
            {/* Social Media Bar */}
            <SocialBar />
            {/* Social Media Bar */}

            <div className="bg-secondary-950 bg-hero-pattern bg-cover bg-no-repeat bg-bottom rounded-[20px] p-10 lg:w-[400px] md:min-h-[762px] text-center order-2 lg:order-1">
              <h2 className="text-h2-bold text-white">اتصل بنا</h2>

              <p className="text-base-regular sm:text-body-normal text-gray-400 leading-8 mt-5">
                نحن هنا لدعم مشروع بنائك! يرجى ملء النموذج أدناه وسنقوم بالرد
                عليك في أقرب وقت ممكن.
              </p>

              <form className="flex flex-col gap-7 mt-10">
                <div className="flex flex-col gap-5 relative">
                  <input
                    type="text"
                    placeholder="الأسم الكامل"
                    className="contact-input"
                  />
                  <div className="h-[1px] w-full bg-secondary-900 rounded-full absolute bottom-0" />
                </div>

                <div className="flex flex-col gap-5 relative">
                  <input
                    type="email"
                    placeholder="الايميل"
                    className="contact-input"
                  />
                  <div className="h-[1px] w-full bg-secondary-900 rounded-full absolute bottom-0" />
                </div>

                <textarea
                  className="bg-transparent border-[1px] border-secondary-900 rounded-[5px] p-3 placeholder:text-secondary-900"
                  placeholder="أكتب رسالتك"
                  rows={10}
                />

                <ButtonComponent content="أرسل" type="submit" />
              </form>
            </div>
          </div>
          {/* Contact Form */}
        </div>
        {/* Wrapper */}
      </div>
    </section>
  );
}
