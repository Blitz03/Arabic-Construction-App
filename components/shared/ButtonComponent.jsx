import Link from "next/link";

export default function ButtonComponent({ text, href, className, type }) {
  return href ? (
    <Link href={href}>
      <button className={`button-primary${className ? " " + className : ""}`}>
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={`button-primary${className ? " " + className : ""}`}
      type={type}>
      {text}
    </button>
  );
}
