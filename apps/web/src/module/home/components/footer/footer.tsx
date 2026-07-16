import FooterArrows from "./footer-arrows";
import FooterLinkColumn from "./footer-link-column";
import {
  FOOTER_COMPANY,
  FOOTER_SOCIAL,
  FOOTER_TERMS,
} from "../../utils/constants";

export default function Footer() {
  return (
    <footer className="mx-[calc(50%-50vw)] w-screen bg-mint">
      <div className="relative mx-auto w-full max-w-site overflow-hidden px-6 pb-8 pt-20 md:px-10 lg:px-[7.15%] lg:pt-27">
        <FooterArrows />

        <img
          src="/vectors/purple-half-circle.svg"
          alt=""
          aria-hidden="true"
          className="animate-half-circle-float-180 pointer-events-none absolute right-12.75 top-43.5 hidden h-43.75 w-34.5 max-w-none lg:block"
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
            className="inline-flex h-13 w-43.75 items-center justify-center rounded-full bg-ink font-body text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:shadow-ink/25 active:scale-95"
          >
            Subscribe Now
          </button>
        </div>

        <div className="mt-18.5 border-t border-ink/60" />

        <div className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:flex lg:justify-between lg:gap-y-0">
          <FooterLinkColumn heading="Company" links={FOOTER_COMPANY} />
          <FooterLinkColumn heading="Terms & Policies" links={FOOTER_TERMS} />
          <FooterLinkColumn heading="Follow Us" links={FOOTER_SOCIAL} />

          <div>
            <h3 className="font-display text-lg font-medium text-ink lg:text-[22px]">
              Terms & Policies
            </h3>
            <ul className="mt-6 flex flex-col gap-5.25 font-body text-[17px] text-ink">
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

        <p className="mt-36.25 text-center font-body text-base text-ink">
          ©2023 Elementum. All rights reserved
        </p>
      </div>
    </footer>
  );
}
