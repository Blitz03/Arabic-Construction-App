import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";
import Qualifications from "@/components/sections/Qualifications";
import { fetchCloudinaryMedia } from "@/actions/work.actions";

export default async function Home() {
  const cloudinaryWorks = await fetchCloudinaryMedia();

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Qualifications />
      <Works cloudinaryWorks={cloudinaryWorks} />
      <Contact />
    </>
  );
}
