import HeroAvatars from "./hero-avatars";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip px-6 pb-0 pt-36 sm:pt-48 md:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-36  h-90 w-40 sm:top-48 lg:block"
      >
        <img
          src="/vectors/orange-wiggly-line.svg"
          alt=""
          className="animate-wiggle-drift absolute left-0 top-0 h-full w-auto max-w-none"
        />
        <img
          src="/vectors/black-wiggly-line.svg"
          alt=""
          className="animate-wiggle-drift-slow absolute left-12 top-0 h-full w-auto max-w-none"
        />
      </div>

      <img
        src="/vectors/purple-half-circle.svg"
        alt=""
        aria-hidden="true"
        className="animate-half-circle-float pointer-events-none absolute right-8 top-16 hidden h-28 w-auto max-w-none sm:block sm:h-36"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="font-display text-4xl font-medium leading-[1.4] text-ink sm:text-6xl lg:text-7xl">
          <span className="block lg:whitespace-nowrap">
            The{" "}
            <span className="relative inline-block">
              <span className="relative">thinkers</span>
              <img
                src="/vectors/yellow-line.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[-15.5%] top-[0.97em] h-[0.5em] w-[127.5%] max-w-none"
              />
            </span>{" "}
            and
          </span>
          <span className="block lg:whitespace-nowrap">
            doers were{" "}
            <span className="relative inline-block">
              <img
                src="/vectors/pink-rectangle.svg"
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
                src="/vectors/green-rectangle.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[-0.25em] top-1/2 h-[1.35em] w-[calc(100%+0.5em)] max-w-none -translate-y-1/2"
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
