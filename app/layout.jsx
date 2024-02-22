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
  title: "شركة النهضة للمقاولات العامة والمشاريع البنائية في الكويت",
  description:
    "شركة النهضة تقدم خدمات البناء والتشييد والتشطيبات بجودة وفعالية عالية  في الكويت. اتصل الآن",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: addBusinessJsonLd() }}
          key="localbusiness-jsonld"
        />
      </head>

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
