import Link from "next/link";

export default function ButtonComponent({ content, href, className }) {
  return href ? (
    <Link href={href}>
      <button className={`button-primary${className ? " " + className : ""}`}>
        {content}
      </button>
    </Link>
  ) : (
    <button className={`button-primary${className ? " " + className : ""}`}>
      {content}
    </button>
  );
}
