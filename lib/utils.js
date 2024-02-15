import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function addBusinessJsonLd() {
  return JSON.stringify({
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "شركة النهضة للتجارة والمقاولات العامة في الكويت",
    description:
      "موقع شركة النهضة يقدم خدمات بناء عالية الجودة في الكويت. اكتشف مشاريعنا الحالية وتعرف على فريقنا المتميز. اتصل بنا اليوم لبدء مشروعك الإنشائي!",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boubyan Complex 79, St, Al-Dajeej, Kuwait",
      addressLocality: "الضجيج",
      addressRegion: "مجمع بوبيان 79",
      postalCode: "80000",
      addressCountry: "الكويت",
    },
    telephone: "+96550464650",
    url: "https://arabic-construction-app.vercel.app/",
    image: [
      "/assets/ad-01.jpg",
      "/assets/ad-02.jpg",
      "/assets/ad-03.jpg",
      "/assets/ad-04.jpg",
      "/assets/works/works-01.jpg",
      "/assets/works/works-02.jpg",
      "/assets/works/works-03.jpg",
      "/assets/works/works-04.jpg",
      "/assets/works/works-05.jpg",
      "/assets/works/works-06.jpg",
      "/assets/works/works-07.jpg",
      "/assets/works/works-08.jpg",
      "/assets/works/works-09.jpg",
      "/assets/works/works-10.jpg",
      "/assets/works/works-11.jpg",
      "/assets/works/works-12.jpg",
      "/assets/works/works-13.jpg",
      "/assets/works/works-14.jpg",
      "/assets/works/works-15.jpg",
      "/assets/works/works-16.jpg",
      "/assets/works/works-17.jpg",
      "/assets/works/works-18.jpg",
      "/assets/works/works-19.jpg",
      "/assets/works/works-20.jpg",
      "/assets/works/works-21.jpg",
    ],
    logo: "/assets/logo.png",
  });
}
