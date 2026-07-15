import HeroAvatars from "./hero-avatars";

export default function Hero() {
  // pb-0: the design levels avatar 04's bottom edge with the features
  // section's first photo, so the avatar row runs right up to it.
  return (
    <section className="relative overflow-x-clip px-6 pb-0 pt-36 sm:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-36 hidden h-[360px] w-40 sm:top-48 lg:block"
      >
        <img
          src="/vectors/Orange%20wiggly%20line.svg"
          alt=""
          className="absolute left-0 top-0 h-full w-auto max-w-none"
        />
        <img
          src="/vectors/Black%20wiggly%20line.svg"
          alt=""
          className="absolute left-12 top-0 h-full w-auto max-w-none"
        />
      </div>

      {/* Decorative shape (top-right corner). Half of it hangs past the design
          frame's right edge and is clipped by the shell's overflow-x-clip. */}
      <img
        src="/vectors/Purple%20half%20circle.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-16 hidden h-28 w-auto max-w-none translate-x-1/2 sm:block sm:h-36"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="font-display text-4xl font-medium leading-[1.4] text-ink sm:text-6xl lg:text-7xl">
          <span className="block lg:whitespace-nowrap">
            The{" "}
            <span className="relative inline-block">
              <span className="relative">thinkers</span>
              <img
                src="/vectors/Yellow%20line.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-[15.5%] top-[0.97em] h-[0.5em] w-[127.5%] max-w-none"
              />
            </span>{" "}
            and
          </span>
          <span className="block lg:whitespace-nowrap">
            doers were{" "}
            <span className="relative inline-block">
              <img
                src="/vectors/Pink%20Rectangle.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[30%] top-1/2 h-[1.45em] w-[75%] max-w-none -translate-y-1/2"
              />
              <span className="relative">changing</span>
            </span>
          </span>
          <span className="block lg:whitespace-nowrap">
            the{" "}
            <span className="relative inline-block px-[0.1em]">
              <img
                src="/vectors/Green%20Rectangle%20.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-[0.25em] top-1/2 h-[1.35em] w-[calc(100%+0.5em)] max-w-none -translate-y-1/2"
              />
              <span className="relative">status</span>
            </span>{" "}
            Quo with
          </span>
        </h1>

        <p className="mt-8 font-body text-base text-ink-soft sm:text-lg">
          <span className="block lg:whitespace-nowrap">
            We are a team of strategists, designers, communicators, researchers.
            Together,
          </span>
          <span className="block lg:whitespace-nowrap">
            we believe that progress only happens when you refuse to play things
            safe.
          </span>
        </p>
      </div>

      <HeroAvatars />
    </section>
  );
}
