import Link from "next/link";

export default function ButtonComponent({
  content,
  href,
  className,
  type = "button",
}) {
  return href ? (
    <Link href={href}>
      <button className={`${className && className} button-primary`}>
        {content}
      </button>
    </Link>
  ) : (
    <button className={`${className && className} button-primary`} type={type}>
      {content}
    </button>
  );
}
