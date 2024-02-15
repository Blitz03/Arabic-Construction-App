import Head from "next/head";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import Qualifications from "@/components/sections/Qualifications";
import { addBusinessJsonLd } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBusinessJsonLd()}
          key="product-jsonld"
        />
      </Head>

      <Hero />
      <Services />
      <About />
      <Qualifications />
      <Works />
      <Contact />
    </>
  );
}
