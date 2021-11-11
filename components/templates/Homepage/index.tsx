import Layout from "../Layout";

import CallUsButtonLink from "components/molecules/CallUsButtonLink";
import SendAMessageButtonLink from "components/molecules/SendAMessageButtonLink";

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
                <CallUsButtonLink />
              </li>

              <li>
                <SendAMessageButtonLink />
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
          <h2>
            Since 1949 the Trenton Corporation has offered a range of wax-based
            anti-corrosion products to protect pipelines
          </h2>

          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>

        <div data-testid="features">
          <p>
            Our high quality, long- lasting products provide optimal
            anti-corrosion protection
          </p>

          <hr />

          <ul>
            <li>No special tools required</li>
            <li>Easy application</li>
            <li>User friendly</li>
            <li>Minimal surface preparation</li>
            <li>Conformable to irregular surfaces</li>
            <li>Removable for inspection</li>
            <li>Compatible with other coatings</li>
            <li>No drying or curing time before backfill</li>
            <li>Environmentally friendly</li>
            <li>Clean MSDS</li>
            <li>Noncarcinogenic</li>
          </ul>
        </div>
      </section>

      <section data-testid="section_three">
        <h2>
          These systems are used by major oil, gas, water and chemical
          processing companies worldwide.
        </h2>
        <div>
          <div>
            <p>Non-toxic coating for pipelines</p>
            <img src="" alt="" />
          </div>

          <div>
            <p>Valve, Flange and Piping Protection</p>
            <img src="" alt="" />
          </div>

          <div>
            <p>Atmospheric piping protection</p>
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section data-testid="faq">
        <h2>Frequently Asked Questions</h2>

        <div>
          <div>
            <h3>
              Where are your products manufactured? Are they made in the USA?
            </h3>
            <p>
              Trenton products are manufactured on-site, in the United States,
              at our facility in Ann Arbor, Michigan.
            </p>
          </div>

          <div>
            <h3>
              Do Trenton’s anti-corrosion wraps provide aboveground and
              belowground protection?
            </h3>
            <p>
              Yes. Wax-Tape®#1 non-firming anticorrosion wrap resists corrosion
              on belowground pipe, including wet and irregular surfaces.
              Wax-Tape® #2 self-firming anticorrosion wrap resists atmospheric
              corrosion on aboveground and belowground pipe, bridge crossings,
              vaults, and other straight or irregular surfaces.
            </p>
          </div>

          <div>
            <h3>Where can I ask questions or place an order?</h3>
            <div>
              <ul>
                <li>
                  <CallUsButtonLink />
                </li>

                <li>
                  <SendAMessageButtonLink />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
