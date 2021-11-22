import Image from "next/image";
import Link from "next/link";

import { SearchIcon } from "@heroicons/react/solid";

import MainNavLinks from "components/molecules/MainNavLinks";
import SocialLinks from "components/molecules/SocialLinks";

export default function Header(): JSX.Element {
  return (
    <header className="font-sans text-gray-500 ring ring-black ring-opacity-5">
      <div className="hidden lg:text-gray-700 lg:bg-gray-100 md:bg-white md:flex md:justify-between md:flex-row md:flex-wrap  md:p-4 md:items-center md:space-x-8">
        <Link href="/">
          <a data-testid="logo" className="md:flex-inital lg:hidden">
            <h1 className=" text-white text-xs">Trenton Corporation</h1>
            <Image
              src="/companyLogo.gif"
              width="222"
              height="53"
              alt="Trenton Corporation logo"
            />
          </a>
        </Link>
        <div
          className="hidden md:flex-auto md:flex md:flex-row md:flex-nowrap"
          data-testid="language_picker"
        >
          <p className="flex-initial pr-4">Choose language:</p>

          <div className="flex-initial px-4 space-x-1">
            <input type="radio" id="english" name="drone" value="english" />
            <label htmlFor="english">English</label>
          </div>

          <div className="flex-initial px-4 space-x-1">
            <input type="radio" id="español" name="drone" value="español" />
            <label htmlFor="español">Español</label>
          </div>

          <div className="flex-initial px-4 space-x-1">
            <input type="radio" id="français" name="drone" value="français" />
            <label htmlFor="français">Français</label>
          </div>
        </div>
      </div>

      <div className="md:p-4">
        <div className="text-center md:text-left md:flex md:flex-row md:flex-nowrap md:items-center md:justify-start md:space-x-8">
          <div className="text-center md:text-left md:flex md:flex-row md:flex-nowrap md:items-center md:space-x-8">
            <Link href="/">
              <a
                data-testid="logo"
                className="md:hidden lg:block lg:flex-initial"
              >
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
              childClassName="py-4 hover:text-black focus:text-red-800 md:flex-initial md:py-0"
            />
          </div>

          <div className="hidden md:flex-initial md:flex md:flex-row md:space-x-8 md:items-center">
            <Link href="/search">
              <a data-testid="search" className="hover:hover:text-black focus:text-red-800 space-x-1">
                <SearchIcon className="w-auto h-6 inline" />
                <span className="inline">Search</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <hr className="hidden md:block md:text-gray-100 md:pb-2" />

      <div className="hidden md:flex md:flex-row md:flex-wrap md:items-center">
        <address className="flex-auto flex flex-nowrap justify-start md:p-4 md:space-x-8 md:items-center">
          <a
            className="not-italic hover:hover:text-black focus:text-red-800 flex-initial"
            data-testid="email"
            href="mailto:trenton@trentoncorp.com"
          >
            trenton@trentoncorp.com
          </a>

          <a
            className="not-italic hover:hover:text-black focus:text-red-800 flex-initial"
            data-testid="address"
            href="https://goo.gl/maps/R2QPKQwxUqhZg7k68"
          >
            7700 Jackson Rd, Ann Arbor, MI 48103
          </a>
          <SocialLinks
            className="flex-initial flex flex-nowrap md:px-4 md:space-x-8"
            childClassName="not-italic hover:hover:text-black focus:text-red-800 flex-auto"
          />
        </address>
      </div>
    </header>
  );
}
