import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function addBusinessJsonLd() {
  return {
    __html: `{
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "شركة النهضة للتجارة والمقاولات العامة في الكويت",
    "description": "موقع شركة النهضة يقدم خدمات بناء عالية الجودة في الكويت. اكتشف مشاريعنا الحالية وتعرف على فريقنا المتميز. اتصل بنا اليوم لبدء مشروعك الإنشائي!",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Boubyan Complex 79, St, Al-Dajeej, Kuwait",
      "addressLocality": "الضجيج",
      "addressRegion": "مجمع بوبيان 79",
      "postalCode": "80000",
      "addressCountry": "الكويت"
    },
    "telephone": "+96550464650",
    "url": "",
    "image": [
      "/assets/logo.png",
     ],
    `,
  };
}
