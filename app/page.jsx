import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import Qualifications from "@/components/sections/Qualifications";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Qualifications />
      <Works />
      <Contact />
    </>
  );
}
