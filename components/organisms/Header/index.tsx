import Image from "next/image";
import Link from "next/link";

import MainNavLinks from "components/molecules/MainNavLinks";

export default function Header(): JSX.Element {
  return (
    <header className="font-sans text-gray-500 ring ring-black ring-opacity-5">
      <div className="container mx-auto p-4 md:grid md:grid-cols-1 md:grid-rows-1 md:gap-2">
        <div className="hidden md:flex md:flex-row md:flex-wrap bg-gray-100 md:p-4">
          <div
            className="hidden md:flex-auto md:flex md:flex-row md:flex-nowrap"
            data-testid="language_picker"
          >
            <p className="flex-auto">Choose language:</p>

            <div className="flex-auto">
              <input type="radio" id="english" name="drone" value="english" />
              <label htmlFor="english">English</label>
            </div>

            <div className="flex-auto">
              <input type="radio" id="español" name="drone" value="español" />
              <label htmlFor="español">Español</label>
            </div>

            <div className="flex-auto">
              <input type="radio" id="français" name="drone" value="français" />
              <label htmlFor="français">Français</label>
            </div>
          </div>

          <div className="hidden md:flex-auto md:flex md:flex-row">
            <label
              className="flex-auto"
              htmlFor="search"
              data-testid="search_label"
            >
              Search
            </label>
            <input
              className="flex-auto"
              type="search"
              name="query"
              id="search"
              data-testid="search_input"
            />
          </div>
        </div>

        <div className="md:px-4">
          <div className="text-center md:text-left md:flex md:flex-row md:flex-nowrap md:items-center">
            <Link href="/">
              <a data-testid="logo" className="md:flex-1">
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
              className="flex flex-col justify-center items-center font-bold md:font-normal md:flex-row md:items-stretch md:flex-auto"
              childClassName="py-4 hover:text-black focus:text-red-800 visited:text-purple-600 md:flex-auto"
            />
          </div>
        </div>

        <div className="hidden md:flex md:flex-row md:flex-wrap">
          <address className="flex-auto flex flex-nowrap md:px-4">
            <a
              className="not-italic hover:hover:text-black focus:text-red-800 visited:text-purple-600 flex-auto"
              data-testid="email"
              href="mailto:trenton@trentoncorp.com"
            >
              trenton@trentoncorp.com
            </a>

            <a
              className="not-italic hover:hover:text-black focus:text-red-800 visited:text-purple-600 flex-auto"
              data-testid="address"
              href="https://goo.gl/maps/R2QPKQwxUqhZg7k68"
            >
              7700 Jackson Rd, Ann Arbor, MI 48103
            </a>
          </address>
        </div>
      </div>
    </header>
  );
}
