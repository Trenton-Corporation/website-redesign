import Image from "next/image";
import Link from "next/link";

import ButtonLink from "components/molecules/ButtonLink";

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

      <nav data-testid="main_navigation">
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
      </nav>

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

      <section data-testid="section_one">
        <div>
          <h2>
            Effective, long-lasting anti-corrosion protection above and below
            ground
          </h2>
          <h3>
            Anti-corrosion wraps, wax coatings, casing fillers, and marine pile
            protection systems worldwide for oil, gas, water, and chemical
            processing companies.
          </h3>

          <div>
            <ul>
              <li>
                <ButtonLink
                  className="callUsLink"
                  href="tel:+17344243600"
                  text="Call us"
                />
              </li>

              <li>
                <ButtonLink
                  isNextLink={true}
                  className="sendAMessageLink"
                  href="/contact"
                  text="Send a message"
                />
              </li>
            </ul>
          </div>
        </div>

        <div></div>

        <div></div>
      </section>
    </header>
  );
}
