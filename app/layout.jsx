import Head from "next/head";
import { Cairo as FontSans } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { addBusinessJsonLd, cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "النهضة للمشاريع البنائية في الكويت - Al-Nahda",
  description:
    "موقعنا يقدم خدمات بناء عالية الجودة في الكويت. اكتشف مشاريعنا الحالية وتعرف على فريقنا المتميز. اتصل بنا اليوم لبدء مشروعك الإنشائي!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBusinessJsonLd()}
          key="localbusiness-jsonld"
        />
      </Head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
