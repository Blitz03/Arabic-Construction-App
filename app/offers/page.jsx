"use client";

import Image from "next/image";

import { offers } from "@/constants";
import Subheader from "@/components/shared/Subheader";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <Subheader text="عروضنا" />

        <div className="flex-wrapper justify-center xl:justify-center items-center flex-col xl:gap-y-20">
          {offers.map((offer, index) => (
            <Image
              key={index}
              src={offer}
              alt="العروض لدى شركة النهضة الكويتية للبناء"
              height={600}
              width={400}
              className="sm:w-1/2 md:w-1/3 lg:w-[450px] relative overflow-hidden object-contain rounded-[20px] hover:scale-105 transition-all work-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
