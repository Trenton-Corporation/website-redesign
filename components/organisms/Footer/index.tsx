import Link from "next/link";

import MainNavLinks from "components/molecules/MainNavLinks";
import SocialLinks from "components/molecules/SocialLinks";

export default function Footer() {
  return (
    <footer data-testid="footer">
      <div>
        <h3>Stay in touch</h3>
        <SocialLinks />
        <div data-testid="products">
          <h3>Products</h3>
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
