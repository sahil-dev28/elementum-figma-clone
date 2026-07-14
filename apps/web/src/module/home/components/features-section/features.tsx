import FeatureRow from "./feature-row";

export default function Features() {
  return (
    <section className="relative overflow-x-clip px-6 pb-16 pt-0 sm:pb-24">
      {/* Soft pink glow bleeding out from behind the first row's photo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-0 h-[420px] w-[420px] -translate-y-1/4 rounded-full bg-pink/50 blur-[90px]"
      />

      <div className="relative flex flex-col gap-24 lg:gap-32">
        <FeatureRow
          href="#"
          imageSrc="/images/features/image%2001.svg"
          imageAlt="Two colleagues listening in a boardroom meeting"
          heading={
            <>
              <span className="block">
                <span className="relative inline-block">
                  <span className="relative">Tomorrow</span>
                  <img
                    src="/vectors/Yellow%20line.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[8%] top-[0.95em] h-[0.45em] w-[116%] max-w-none"
                  />
                </span>{" "}
                should
              </span>
              <span className="block">
                be better than{" "}
                <span className="relative inline-block px-[0.1em]">
                  <img
                    src="/vectors/Green%20Rectangle%20.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[0.25em] top-1/2 h-[1.35em] w-[calc(100%+0.5em)] max-w-none -translate-y-1/2"
                  />
                  <span className="relative">today</span>
                </span>
              </span>
            </>
          }
          body={
            <>
              <span className="block lg:whitespace-nowrap">
                We are a team of strategists, designers, communicators,
                researchers.
              </span>
              <span className="block lg:whitespace-nowrap">
                Together, we believe that progress only happens when you refuse
              </span>
              <span className="block lg:whitespace-nowrap">
                to play things safe.
              </span>
            </>
          }
          decor={
            <img
              src="/vectors/Square.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-4 h-32 w-auto max-w-none sm:-right-12 sm:h-44"
            />
          }
        />

        <FeatureRow
          reverse
          href="#"
          imageSrc="/images/features/image%2002.svg"
          imageAlt="Two colleagues working together over a laptop"
          heading={
            <>
              <span className="block">
                <span className="relative inline-block px-[0.1em]">
                  <img
                    src="/vectors/Green%20Rectangle%20.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[0.25em] top-1/2 h-[1.35em] w-[calc(100%+0.5em)] max-w-none -translate-y-1/2"
                  />
                  <span className="relative">See</span>
                </span>{" "}
                how we can
              </span>
              <span className="block">
                help you{" "}
                <span className="relative inline-block">
                  <span className="relative">progress</span>
                  <img
                    src="/vectors/Yellow%20line.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[8%] top-[0.95em] h-[0.45em] w-[116%] max-w-none"
                  />
                </span>
              </span>
            </>
          }
          body={
            <>
              <span className="block lg:whitespace-nowrap">
                We add a layer of fearless insights and action that allows
                change
              </span>
              <span className="block lg:whitespace-nowrap">
                makers to accelerate their progress in areas such as brand,
                design,
              </span>
              <span className="block lg:whitespace-nowrap">
                digital, comms and social research.
              </span>
            </>
          }
          decor={
            <>
              <img
                src="/vectors/Triangle.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -left-6 top-0 h-28 w-auto max-w-none sm:h-36"
              />
              <img
                src="/vectors/Triangle.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 right-0 h-32 w-auto max-w-none sm:h-40"
              />
            </>
          }
        />
      </div>
    </section>
  );
}
