import FooterArrows from "./footer-arrows";
import FooterLinkColumn from "./footer-link-column";

const COMPANY = ["Home", "Studio", "Service", "Blog"] as const;
const TERMS = [
  "Privacy Policy",
  "Terms & Conditions",
  "Explore",
  "Accesibility",
] as const;
const SOCIAL = ["Instagram", "LinkedIn", "Youtube", "Twitter"] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-mint px-6 pb-8 pt-20 lg:px-[7.15%] lg:pt-[108px]">
      <FooterArrows />

      <img
        src="/vectors/Purple%20half%20circle.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[51px] top-[174px] hidden h-[175px] w-[138px] max-w-none lg:block"
      />

      <h2 className="relative text-center font-display text-4xl font-medium leading-[1.02] text-ink sm:text-6xl lg:text-[88px]">
        <span className="block">Subscribe to</span>
        <span className="block">our newsletter</span>
      </h2>

      <p className="mt-2 text-center font-body text-base text-ink sm:text-lg">
        To make your stay special and even more memorable
      </p>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="inline-flex h-[52px] w-[175px] items-center justify-center rounded-full bg-ink font-body text-[15px] font-semibold text-cream"
        >
          Subscribe Now
        </button>
      </div>

      <div className="mt-[74px] border-t border-ink/60" />

      <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
        <FooterLinkColumn heading="Company" links={COMPANY} />
        <FooterLinkColumn heading="Terms & Policies" links={TERMS} />
        <FooterLinkColumn heading="Follow Us" links={SOCIAL} />

        <div>
          <h3 className="font-display text-lg font-medium text-ink lg:text-[22px]">
            Terms & Policies
          </h3>
          <ul className="mt-6 flex flex-col gap-[21px] font-body text-[17px] text-ink">
            <li className="leading-[1.35]">
              1498w Fluton ste, STE
              <br />
              2D Chicgo, IL 63867.
            </li>
            <li>(123) 456789000</li>
            <li>info@elementum.com</li>
          </ul>
        </div>
      </div>

      <p className="mt-[145px] text-center font-body text-base text-ink">
        ©2023 Elementum. All rights reserved
      </p>
    </footer>
  );
}
