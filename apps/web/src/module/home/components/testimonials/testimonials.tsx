import TestimonialAvatar from "./testimonial-avatar";
import {
  TESTIMONIAL_AVATARS,
  TESTIMONIAL_REVIEW_LINES,
} from "../../utils/constants";

export default function Testimonials() {
  return (
    <section className="relative overflow-x-clip px-6 pb-16 pt-28 sm:pb-24 lg:px-0 lg:pb-47.5 lg:pt-46">
      <div className="relative w-full">
        {TESTIMONIAL_AVATARS.map((avatar) => (
          <TestimonialAvatar
            key={avatar.src}
            src={avatar.src}
            className={`hidden lg:block ${avatar.className}`}
          />
        ))}

        <h2 className="relative text-center font-display text-4xl font-medium leading-[1.05] text-ink sm:text-5xl lg:text-[52px]">
          <span className="block">
            <span className="relative inline-block px-[0.25em]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[-0.08em] top-[0.45em] h-[0.95em] w-[calc(100%+0.16em)] -translate-y-1/2 rounded-full bg-mint"
              />
              <span className="relative">What</span>
            </span>{" "}
            our customer
          </span>
          <span className="block">
            says{" "}
            <span className="relative inline-block">
              <span className="relative">About Us</span>
              <img
                src="/vectors/yellow-line.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[-6%] top-[0.8em] h-[0.45em] w-[112%] max-w-none"
              />
            </span>
          </span>
        </h2>

        <figure className="relative mx-auto mt-11 w-full max-w-162.5 rounded-[30px] bg-mint/35 px-8 py-9 sm:px-12">
          <img
            src="/vectors/oxford-comma.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-13.75 top-7 hidden h-8.75 w-12.25 sm:block"
          />
          <img
            src="/vectors/serial-comma.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-7 right-36.25 hidden h-8.75 w-12.25 sm:block"
          />
          <blockquote className="text-center font-body text-base leading-[1.6] text-ink sm:text-lg lg:text-xl">
            <span className="lg:hidden">{TESTIMONIAL_REVIEW_LINES.join(" ")}</span>
            <span className="hidden lg:block">
              {TESTIMONIAL_REVIEW_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
