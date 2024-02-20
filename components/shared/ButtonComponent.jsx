import Link from "next/link";

export default function ButtonComponent({
  text,
  href,
  className,
  type = "button",
  variant = "button-primary",
}) {
  return href ? (
    <Link href={href}>
      <button className={`${variant}${className ? " " + className : ""}`}>
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={`${variant}${className ? " " + className : ""}`}
      type={type}>
      {text}
    </button>
  );
}
