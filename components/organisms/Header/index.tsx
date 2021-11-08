import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <div>
      <Link href="/">
        <a data-testid="logo">
          <span>Trenton Corporation</span>
          <Image
            src="/companyLogo.gif"
            width="222"
            height="53"
            alt="Trenton Corporation logo"
          />
        </a>
      </Link>
    </div>
  );
}
