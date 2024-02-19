import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32">
      {/* Main Footer */}
      <div className="bg-footer-pattern bg-cover bg-right-top bg-no-repeat bg-secondary-950 min-h-[720px] md:min-h-[459px] p-20">
        <div className="container flex flex-wrap flex-column md:flex-row justify-center md:justify-around text-center md:text-right gap-20">
          {/* Contact */}
          <div>
            <h3 className="text-h2-mobile-bold text-white mb-5">اتصل بنا</h3>

            {/* Contact Links Wrapper */}
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-7 items-center md:items-start">
                <li>
                  <Link href="tel:+96550464650" className="footer-link">
                    <Image
                      src="/assets/call-primary.svg"
                      alt="call"
                      height={24}
                      width={24}
                    />
                    <span className="text-gray-300 text-small-semibold">
                      96550464650+
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="mailto:fatehalden6@gmail.com"
                    className="footer-link">
                    <Image
                      src="/assets/message-primary.svg"
                      alt="message"
                      height={24}
                      width={24}
                    />
                    <span className="text-gray-300 text-small-semibold">
                      fatehalden6@gmail.com
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://maps.app.goo.gl/YYPKvsPGU1u5fVxe9"
                    target="_blank"
                    className="footer-link">
                    <Image
                      src="/assets/location-primary.svg"
                      alt="location"
                      height={24}
                      width={24}
                    />
                    <span className="text-gray-300 text-small-semibold">
                      الضجيج - مجمع بوبيان -
                      <br />
                      مبنى رقم 72 - ميزانين مكتب رقم 28
                    </span>
                  </Link>
                </li>
              </ul>

              <ul className="flex items-center gap-10">
                <li className="footer-link">
                  <Link
                    href="https://www.snapchat.com/add/fateh.alden94"
                    className="h-6 w-6 relative"
                    target="_blank">
                    <Image
                      src="/assets/snapchat-primary.svg"
                      alt="snapchat"
                      fill
                      className="object-contain"
                    />
                  </Link>
                </li>

                <li className="footer-link">
                  <Link
                    href="https://www.instagram.com/alnahdakw/"
                    className="h-6 w-6 relative"
                    target="_blank">
                    <Image
                      src="/assets/instagram-primary.svg"
                      alt="instagram"
                      fill
                      className="object-contain"
                    />
                  </Link>
                </li>

                <li className="footer-link">
                  <Link
                    href="https://www.facebook.com/"
                    className="h-6 w-6 relative"
                    target="_blank">
                    <Image
                      src="/assets/facebook-primary.svg"
                      alt="facebook"
                      fill
                      className="object-contain"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Links Wrapper */}
          {/* Contact */}

          {/* Services */}
          <div>
            <h3 className="text-h2-mobile-bold text-white mb-5">خدماتنا</h3>

            <ul className="flex flex-col gap-7">
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 text-small-semibold hover:text-primary-500 transition-all">
                  هيكل أسود
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="text-gray-300 text-small-semibold hover:text-primary-500 transition-all">
                  تشطيب على المفتاح
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="text-gray-300 text-small-semibold hover:text-primary-500 transition-all">
                  ترميمات عامة
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}

          {/* Sections */}
          <div>
            <h3 className="text-h2-mobile-bold text-white mb-5">الأقسام</h3>

            <ul className="flex flex-col gap-7">
              <li className="text-gray-300 text-small-semibold">
                <Link
                  href="/#"
                  className="hover:text-primary-500 transition-all">
                  القسم الرئيسي
                </Link>
              </li>

              <li className="text-gray-300 text-small-semibold">
                <Link
                  href="/#services"
                  className="hover:text-primary-500 transition-all">
                  الخدمات
                </Link>
              </li>

              <li className="text-gray-300 text-small-semibold">
                <Link
                  href="/#about"
                  className="hover:text-primary-500 transition-all">
                  من نحن؟
                </Link>
              </li>

              <li className="text-gray-300 text-small-semibold">
                <Link
                  href="/#works"
                  className="hover:text-primary-500 transition-all">
                  أعمالنا
                </Link>
              </li>

              <li className="text-gray-300 text-small-semibold">
                <Link
                  href="/#contact"
                  className="hover:text-primary-500 transition-all">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          {/* Sections */}
        </div>
      </div>

      {/* Main Footer */}

      {/* Rights */}
      <div className="bg-primary-500 py-4 text-white text-base-medium text-center">
        © 2024 - جميع الحقوق محفوظة
      </div>
      {/* Rights */}
    </footer>
  );
}
