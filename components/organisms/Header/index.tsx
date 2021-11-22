import Image from "next/image";
import Link from "next/link";

import { SearchIcon } from "@heroicons/react/solid";

import MainNavLinks from "components/molecules/MainNavLinks";

export default function Header(): JSX.Element {
  return (
    <header className="font-sans text-gray-500 ring ring-black ring-opacity-5">
      <div className="hidden text-gray-700 md:flex md:justify-between md:flex-row md:flex-wrap bg-gray-100 md:p-4 md:items-center">
        <div
          className="hidden md:flex-auto md:flex md:flex-row md:flex-nowrap md:space-x-8"
          data-testid="language_picker"
        >
          <p className="flex-initial">Choose language:</p>

          <div className="flex-initial space-x-1">
            <input type="radio" id="english" name="drone" value="english" />
            <label htmlFor="english">English</label>
          </div>

          <div className="flex-initial space-x-1">
            <input type="radio" id="español" name="drone" value="español" />
            <label htmlFor="español">Español</label>
          </div>

          <div className="flex-initial space-x-1">
            <input type="radio" id="français" name="drone" value="français" />
            <label htmlFor="français">Français</label>
          </div>
        </div>
      </div>

      <div className="md:p-4">
        <div className="text-center md:text-left md:flex md:flex-row md:flex-nowrap md:items-center md:justify-between xl:justify-start xl:space-x-8">
          <div className="text-center md:text-left md:flex md:flex-row md:flex-nowrap md:items-center md:space-x-8">
            <Link href="/">
              <a data-testid="logo" className="md:flex-initial">
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
              className="flex flex-col justify-center items-center font-bold md:font-normal md:flex-row md:items-stretch md:flex-initial md:space-x-8"
              childClassName="py-4 hover:text-black focus:text-red-800 visited:text-purple-600 md:flex-initial md:py-0"
            />
          </div>

          <div className="hidden md:flex-initial md:flex md:flex-row md:space-x-8">
            <Link href="/search">
              <a data-testid="search" className="space-x-1">
                <SearchIcon className="w-auto h-8 inline" />
                <span className="inline">Search</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <hr className="hidden md:block md:text-gray-100 md:pb-2" />

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
    </header>
  );
}
