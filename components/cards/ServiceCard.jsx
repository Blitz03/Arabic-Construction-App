import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col gap-5 xs:w-full sm:w-1/2 lg:w-[47%] xl:max-w-[340px] text-center">
      {/* Image Wrapper */}
      <div className="aspect-square relative">
        <Image
          src={service.imageUrl}
          alt={service.alt}
          fill
          className="object-contain rounded-[20px]"
        />
      </div>
      {/* Image Wrapper */}

      {/* Text Wrapper */}
      <div>
        <h3 className="text-body-semibold pb-2">{service.title}</h3>

        <p className="paragraph">{service.description}</p>
      </div>
      {/* Text Wrapper */}
    </div>
  );
}
