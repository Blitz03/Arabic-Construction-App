import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col gap-5 w-full md:w-auto md:max-w-[360px] text-center">
      {/* Image Wrapper */}
      <div className="h-[230px] w-full md:w-[360px] relative">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          className="object-cover rounded-[20px]"
        />
      </div>
      {/* Image Wrapper */}

      {/* Text Wrapper */}
      <div>
        <h4 className="text-body-semibold pb-2">{service.title}</h4>

        <p className="paragraph">{service.description}</p>
      </div>
      {/* Text Wrapper */}
    </div>
  );
}
