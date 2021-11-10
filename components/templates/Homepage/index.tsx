import Layout from "../Layout";
import ButtonLink from "components/molecules/ButtonLink";

export default function Homepage() {
  return (
    <Layout>
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

        <div>
          <img src="" alt="" />
        </div>

        <div>
          <p>
            Our products are easy to use and don’t require special tools.
            Thousands of miles of pipelines worldwide are protected by Trenton
            systems.
          </p>
        </div>
      </section>

      <section data-testid="section_two">
        <div>
          <div>
            <h2>
              Since 1949 the Trenton Corporation has offered a range of
              wax-based anti-corrosion products to protect pipelines
            </h2>
            <h3>
              Our high quality, long- lasting products provide optimal
              anti-corrosion protection
            </h3>
          </div>

          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
