import ServiceCard from "../cards/ServiceCard";
import Subheader from "../shared/Subheader";
import { services } from "@/constants";

export default function Services() {
  return (
    <section className="relative" id="services">
      <div className="bg-services-pattern bg-contain bg-center bg-no-repeat min-h-[1817px] w-full absolute top-0 left-0 z-[-1]" />

      <div className="container">
        {/* Subheading */}
        <Subheader text="خدماتنا" />
        {/* Subheading */}

        {/* Services Wrapper */}
        <div className="flex flex-col flex-wrap justify-center lg:justify-start sm:flex-row gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        {/* Services Wrapper */}
      </div>
    </section>
  );
}
