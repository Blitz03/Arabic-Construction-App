import Image from "next/image";

import { qualifications } from "@/constants";
import Subheader from "../shared/Subheader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Qualifications() {
  return (
    <section className="pt-16">
      <div className="container">
        <Subheader text="الشهادات" />

        <Carousel dir="ltr">
          <CarouselContent>
            {qualifications.map((qualification, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 flex flex-col items-center">
                <span className="text-secondary-950 text-body-semibold text-center lg:text-right block pb-5">
                  {qualification.title}
                </span>

                <div className="h-[470px] sm:h-[500px] w-full md:w-[350px] lg:w-[300px] xl:w-[350px] relative">
                  <Image
                    src={qualification.imageUrl}
                    alt={qualification.title}
                    fill
                    className="object-contain md:object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
