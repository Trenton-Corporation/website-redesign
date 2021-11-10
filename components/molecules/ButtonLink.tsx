import Link from "next/link";

export default function ButtonLink(props: {
  className?: string;
  href: string;
  children?: React.ReactChild | React.ReactChild[];
  text: string;
  isNextLink?: boolean;
}): JSX.Element {
  return props.isNextLink ? (
    <Link href={props.href}>
      <a className={props.className}>{props.text}</a>
    </Link>
  ) : (
    <a className={props.className} href={props.href}>
      {props.text}
      {props.children}
    </a>
  );
}
