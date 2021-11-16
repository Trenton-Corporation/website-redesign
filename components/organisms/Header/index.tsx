import Image from "next/image";
import Link from "next/link";

import MainNavLinks from "components/molecules/MainNavLinks";

export default function Header(): JSX.Element {
  return (
    <header className="font-sans text-gray-500 ring ring-black ring-opacity-5">
      <address className="hidden md:flex md:flex-row md:flex-nowrap md:justify-center md:items-center md:space-x-4">
        <a
          data-testid="email"
          href="mailto:trenton@trentoncorp.com"
          className=" not-italic hover:hover:text-black focus:text-red-800 visited:text-purple-600"
        >
          trenton@trentoncorp.com
        </a>

        <a
          data-testid="address"
          href="https://goo.gl/maps/R2QPKQwxUqhZg7k68"
          className=" not-italic hover:hover:text-black focus:text-red-800 visited:text-purple-600"
        >
          7700 Jackson Rd, Ann Arbor, MI 48103
        </a>
      </address>

      <div className="container mx-auto p-4 md:grid md:grid-cols-1 md:grid-rows-3 md:gap-4">
        <div>
          <Link href="/">
            <a data-testid="logo" className="text-center py-4">
              <h1 className=" text-white text-xs">Trenton Corporation</h1>
              <Image
                src="/companyLogo.gif"
                width="222"
                height="53"
                alt="Trenton Corporation logo"
              />
            </a>
          </Link>

          <MainNavLinks
            className="flex flex-col justify-center items-center font-bold md:font-normal md:flex-row"
            childClassName="py-4 hover:text-black focus:text-red-800 visited:text-purple-600 md:px-8"
          />

          <div className="hidden sm:block md:space-x-2">
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

        <div
          data-testid="language_picker"
          className="hidden md:flex md:flex-row md:flex-nowrap md:justify-center md:items-center md:space-x-8"
        >
          <p>Choose language:</p>

          <div className="md:space-x-2">
            <input type="radio" id="english" name="drone" value="english" />
            <label htmlFor="english">English</label>
          </div>

          <div className="md:space-x-2">
            <input type="radio" id="español" name="drone" value="español" />
            <label htmlFor="español">Español</label>
          </div>

          <div className="md:space-x-2">
            <input type="radio" id="français" name="drone" value="français" />
            <label htmlFor="français">Français</label>
          </div>
        </div>
      </div>
    </header>
  );
}
