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
            <h3 className="text-h2-mobile-bold text-white mb-5">أتصل بنا</h3>

            <ul className="flex flex-col gap-7 items-center md:items-start">
              <li className="footer-link">
                <div className="h-6 w-6 relative">
                  <Image src="/assets/call-primary.svg" alt="call" fill />
                </div>
                <span className="text-gray-300 text-small-semibold">
                  50464650
                </span>
              </li>

              <li className="footer-link">
                <div className="h-6 w-6 relative">
                  <Image src="/assets/message-primary.svg" alt="message" fill />
                </div>
                <span className="text-gray-300 text-small-semibold">
                  fatehalden6@gmail.com
                </span>
              </li>

              <li className="footer-link">
                <div className="h-6 w-6 relative">
                  <Image
                    src="/assets/location-primary.svg"
                    alt="location"
                    fill
                  />
                </div>
                <span className="text-gray-300 text-small-semibold">
                  الضجيج - مجمع بوبيان -
                  <br />
                  مبنى رقم 72 - ميزانين مكتب رقم 28
                </span>
              </li>

              <li className="footer-link">
                <div className="h-6 w-6 relative">
                  <Image
                    src="/assets/snapchat-primary.svg"
                    alt="snapchat"
                    fill
                  />
                </div>
                <span className="text-gray-300 text-small-semibold">
                  XXXXXXX
                </span>
              </li>

              <li className="footer-link">
                <div className="h-6 w-6 relative">
                  <Image
                    src="/assets/instagram-primary.svg"
                    alt="instagram"
                    fill
                  />
                </div>
                <span className="text-gray-300 text-small-semibold">
                  alnahdakw
                </span>
              </li>

              <li className="footer-link">
                <div className="h-6 w-6 relative">
                  <Image
                    src="/assets/facebook-primary.svg"
                    alt="facebook"
                    fill
                  />
                </div>
                <span className="text-gray-300 text-small-semibold">
                  XXXXXXX
                </span>
              </li>
            </ul>
          </div>
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
