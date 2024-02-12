import Image from "next/image";

import { qualifications } from "@/constants";
import Subheader from "../shared/Subheader";

export default function Qualifications() {
  return (
    <section className="pt-16">
      <div className="container">
        <Subheader text="الشهادات" />

        <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-10">
          {qualifications.map((qualification, index) => (
            <div key={index}>
              <span className="text-secondary-950 text-body-semibold text-center lg:text-right block pb-5">
                {qualification.title}
              </span>

              <div className="h-[530px] w-full sm:w-[360px] relative">
                <Image
                  src={qualification.imageUrl}
                  alt={qualification.title}
                  fill
                  className="object-cover rounded-[20px] shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
