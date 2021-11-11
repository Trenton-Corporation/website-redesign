import Image from "next/image";
import Link from "next/link";

import MainNavLinks from "components/molecules/MainNavLinks";

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

      <div data-testid="language_picker">
        <p>Choose language:</p>

        <div>
          <input type="radio" id="english" name="drone" value="english" />
          <label htmlFor="english">English</label>
        </div>

        <div>
          <input type="radio" id="español" name="drone" value="español" />
          <label htmlFor="español">Español</label>
        </div>

        <div>
          <input type="radio" id="français" name="drone" value="français" />
          <label htmlFor="français">Français</label>
        </div>
      </div>

      <MainNavLinks />

      <div>
        <label htmlFor="search" data-testid="search_label">
          Search
        </label>
        <input
          type="search"
          name="query"
          id="search"
          data-testid="search_input"
        />
      </div>
    </header>
  );
}
