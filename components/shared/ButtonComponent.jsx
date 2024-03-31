import Link from "next/link";

export default function ButtonComponent({
  id = "",
  text,
  href,
  className,
  type = "button",
  variant = "button-primary",
}) {
  return href ? (
    <Link href={href} id={id}>
      <button className={`${variant}${className ? " " + className : ""}`}>
        {text}
      </button>
    </Link>
  ) : (
    <button
      id={id}
      className={`${variant}${className ? " " + className : ""}`}
      type={type}>
      {text}
    </button>
  );
}
