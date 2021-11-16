import Link from "next/link";

export default function MainNavLinks(props: {
  className?: string;
  childClassName?: string;
}) {
  return (
    <ul className={props.className}>
      <li className={props.childClassName}>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
      <li className={props.childClassName}>
        <Link href="/company">
          <a>Company</a>
        </Link>
      </li>
      <li className={props.childClassName}>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </li>
      <li className={props.childClassName}>
        <Link href="/info">
          <a>Info Library</a>
        </Link>
      </li>
      <li className={props.childClassName}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
}
