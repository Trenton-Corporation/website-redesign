import Link from "next/link";

export default function MainNavLinks() {
  return (
    <ul>
      <li>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/company">
          <a>Company</a>
        </Link>
      </li>
      <li>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </li>
      <li>
        <Link href="/info">
          <a>Info Library</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
}
