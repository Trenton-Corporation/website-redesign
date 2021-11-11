import Link from "next/link";

import MainNavLinks from "components/molecules/MainNavLinks";

export default function Footer() {
  return (
    <footer data-testid="footer">
      <div>
        <h4>Stay in touch</h4>
        <ul data-testid="social">
          <li>
            <a href="https://www.youtube.com/user/TrentonCorpVideos?feature=watch">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/trenton-corporation-anticorrosion-materials">
              LinkedIn
            </a>
          </li>
        </ul>

        <div data-testid="products">
          <h4>Products</h4>
          <ul>
            <li>
              <Link href="/products/wax-tape-brand-anticorrosion-wraps/">
                <a>Wax-Tape® Brand Anticorrosion Wraps</a>
              </Link>
            </li>

            <li>
              <Link href="/products/primers-other-products/">
                <a>Primers & Other Products</a>
              </Link>
            </li>

            <li>
              <Link href="/products/innercoat-hot-applied-wax-coating-system/">
                <a>Innercoat® Hot-Applied Wax Coating System</a>
              </Link>
            </li>

            <li>
              <Link href="/products/outerwraps/">
                <a>Outerwraps</a>
              </Link>
            </li>

            <li>
              <Link href="/products/casing-filling/">
                <a>Casing Filling</a>
              </Link>
            </li>

            <li>
              <Link href="/products/primers-other-products/patch-pad-exothermic-weld-protector">
                <a>Patch-Pad® Exothermic Weld Protector</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <nav data-testid="main_navigation">
          <MainNavLinks />
        </nav>
      </div>
    </footer>
  );
}
