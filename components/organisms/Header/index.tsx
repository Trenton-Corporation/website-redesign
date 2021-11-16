import Image from "next/image";
import Link from "next/link";

import MainNavLinks from "components/molecules/MainNavLinks";

export default function Header(): JSX.Element {
  return (
    <header className="text-gray-900 ring-4 ring-black ring-opacity-10">
      <div className="container mx-auto p-4">
        <div className=" text-center">
          <Link href="/">
            <a data-testid="logo">
              <h1 className="invisible">Trenton Corporation</h1>
              <Image
                src="/companyLogo.gif"
                width="222"
                height="53"
                alt="Trenton Corporation logo"
              />
            </a>
          </Link>

          <address className="hidden md:visible">
            <a
              data-testid="email"
              href="mailto:trenton@trentoncorp.com"
              className=" not-italic hover:text-red-800 focus:text-red-800 visited:text-purple-600"
            >
              trenton@trentoncorp.com
            </a>

            <a
              data-testid="address"
              href="https://goo.gl/maps/R2QPKQwxUqhZg7k68"
              className=" not-italic hover:text-red-800 focus:text-red-800 visited:text-purple-600"
            >
              7700 Jackson Rd, Ann Arbor, MI 48103
            </a>
          </address>
        </div>

        <div data-testid="language_picker" className="hidden md:visible">
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

        <MainNavLinks
          className="flex flex-col justify-center items-center font-bold"
          childClassName="py-4 hover:text-red-800 focus:text-red-800 visited:text-purple-600"
        />

        <div className="hidden md:visible">
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
      </div>
      <hr />
    </header>
  );
}
