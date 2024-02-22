import Image from "next/image";

export default function Menu({ isOpen, setIsOpen, className, children }) {
  return (
    <div
      className={`fixed top-0 right-0 bg-white h-full w-full p-5 visible lg:invisible transition-all duration-300 z-50 ${
        isOpen ? "visible top-0" : "invisible -top-full"
      } ${className ? " " + className : ""}`}>
      <button onClick={() => setIsOpen(false)}>
        <Image
          src="/assets/close.svg"
          alt="close"
          width={12}
          height={12}
          className="object-contain"
        />
      </button>

      {children}
    </div>
  );
}
