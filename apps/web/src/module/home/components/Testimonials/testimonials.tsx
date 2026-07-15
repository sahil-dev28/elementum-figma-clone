import TestimonialAvatar from "./testimonial-avatar";

const AVATARS = [
  {
    src: "/images/testimonials/image%2001.png",
    className: "left-[100px] top-0 h-[104px] w-[104px]",
  },
  {
    src: "/images/testimonials/image%2002.png",
    className: "left-[29px] top-[167px] h-[62px] w-[62px]",
  },
  {
    src: "/images/testimonials/image%2003.png",
    className: "left-[130px] top-[187px] h-[180px] w-[180px]",
  },
  {
    src: "/images/testimonials/image%2004.png",
    className: "left-[8px] top-[361px] h-[102px] w-[102px]",
  },
  {
    src: "/images/testimonials/image%2005.png",
    className: "right-[90px] top-0 h-[122px] w-[122px]",
  },
  {
    src: "/images/testimonials/image%2006.png",
    className: "right-[261px] top-[62px] h-[75px] w-[75px]",
  },
  {
    src: "/images/testimonials/image%2007.png",
    className: "right-[227px] top-[180px] h-[93px] w-[93px]",
  },
  {
    src: "/images/testimonials/image%2008.png",
    className: "right-[27px] top-[278px] h-[220px] w-[220px]",
  },
] as const;

const REVIEW_LINES = [
  "Elementum  delivered the site with inthe timeline",
  "as they requested. Inthe end, the client found a 50%",
  "increase in traffic with in days since its launch. They",
  "also had an impressive ability to use technologies that",
  "the company hasn't used, which have also proved to",
  "be easy to use and reliable",
] as const;

export default function Testimonials() {
  return (
    <section className="relative overflow-x-clip px-6 pb-16 pt-28 sm:pb-24 lg:px-0 lg:pb-[190px] lg:pt-[184px]">
      <div className="relative w-full">
        {AVATARS.map((avatar) => (
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
                className="pointer-events-none absolute -left-[0.08em] top-[0.45em] h-[0.95em] w-[calc(100%+0.16em)] -translate-y-1/2 rounded-full bg-mint"
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
                src="/vectors/Yellow%20line.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-[6%] top-[0.8em] h-[0.45em] w-[112%] max-w-none"
              />
            </span>
          </span>
        </h2>

        <figure className="relative mx-auto mt-11 w-full max-w-[650px] rounded-[30px] bg-mint/35 px-8 py-9 sm:px-12">
          <img
            src="/vectors/Oxford%20comma%20.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[55px] top-[28px] hidden h-[35px] w-[49px] sm:block"
          />
          <img
            src="/vectors/serial%20comma.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[28px] right-[145px] hidden h-[35px] w-[49px] sm:block"
          />
          <blockquote className="text-center font-body text-base leading-[1.6] text-ink sm:text-lg lg:text-xl">
            <span className="lg:hidden">{REVIEW_LINES.join(" ")}</span>
            <span className="hidden lg:block">
              {REVIEW_LINES.map((line) => (
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
