import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header>
      <div>
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

        <address>
          <a data-testid="email" href="mailto:trenton@trentoncorp.com">
            trenton@trentoncorp.com
          </a>

          <a data-testid="address" href="https://goo.gl/maps/R2QPKQwxUqhZg7k68">
            7700 Jackson Rd, Ann Arbor, MI 48103
          </a>
        </address>
      </div>
    </header>
  );
}
