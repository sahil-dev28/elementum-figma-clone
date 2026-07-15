import FeatureRow from "./feature-row";

export default function Features() {
  // lg:px-[7.15%] ≈ the design's 103px content inset on the 1440px frame. The
  // rows must not be nudged right of it: the shell clips at the frame edge, so
  // anything past 1440 (like the square decor) silently disappears.
  return (
    <section className="relative overflow-x-clip px-6 pb-16 pt-0 sm:pb-24 lg:px-[7.15%]">
      <img
        src="/vectors/Ellipse.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[120px] left-1/2 h-[420px] w-[420px] max-w-none -translate-x-1/2 lg:-top-[221px] lg:h-[766px] lg:w-[766px]"
      />

      <div className="relative flex flex-col gap-24 lg:gap-32">
        {/* Connector from the second photo up to the first, dipping just above
            "See". First child so both photos paint over it, as in the design.
            lg-only: the connector is meaningless once the rows stack. */}
        <img
          src="/vectors/Large%20wiggly.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[250px] top-[350px] hidden h-[458px] w-[1052px] max-w-none lg:block"
        />

        <FeatureRow
          href="#"
          imageSrc="/images/features/image%2001.svg"
          imageAlt="Two colleagues listening in a boardroom meeting"
          heading={
            <>
              <span className="block lg:whitespace-nowrap">
                <span className="relative inline-block">
                  <span className="relative">Tomorrow</span>
                  <img
                    src="/vectors/Yellow%20line.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[0.10em] top-[0.98em] h-[0.65em] w-[105%] max-w-none"
                  />
                </span>{" "}
                should
              </span>
              <span className="block lg:whitespace-nowrap">
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
              className="pointer-events-none absolute -right-8 top-10 h-32 w-auto max-w-none sm:-right-12 sm:h-44 lg:-right-[100px] lg:top-9"
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
              <span className="block lg:whitespace-nowrap">
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
              <span className="block lg:whitespace-nowrap">
                help you{" "}
                <span className="relative inline-block">
                  <span className="relative">progress</span>
                  <img
                    src="/vectors/Yellow%20line.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[13%] top-[0.98em] h-[0.65em] w-[125%] max-w-none"
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
                className="pointer-events-none absolute -left-1 top-0 h-28 w-auto max-w-none sm:h-36"
              />
              <img
                src="/vectors/Triangle.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-10 z-10 h-32 w-auto max-w-none sm:h-40"
              />
            </>
          }
        />
      </div>
    </section>
  );
}
