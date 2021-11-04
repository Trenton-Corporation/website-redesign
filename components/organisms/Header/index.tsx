import Image from "next/image";
import Link from "next/link";

import companyLogo from "public/companyLogo.gif";

export default function Header(): JSX.Element {
  return (
    <div>
      <Link href="/" data-testid="logo">
        <a>
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
