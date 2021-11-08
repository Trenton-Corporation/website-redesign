import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header>
      <Link href="/">
        <a data-testid="logo">
          <h1>Trenton Corporation</h1>
          <Image
            src="/companyLogo.gif"
            width="222"
            height="53"
            alt="Trenton Corporation logo"
          />
        </a>
      </Link>

      <a data-testid="email" href="mailto:trenton@trentoncorp.com">
        trenton@trentoncorp.com
      </a>
    </header>
  );
}
