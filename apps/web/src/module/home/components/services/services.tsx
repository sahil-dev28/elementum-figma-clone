import ServiceRow from "./service-row";
import { SERVICES } from "../../utils/constants";

export default function Services() {
  return (
    <section className="relative overflow-x-clip px-6 pb-16 pt-32 sm:pb-24 lg:px-[7.15%] lg:pt-70">
      <img
        src="/vectors/large-wiggly.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-28.5 left-182.25 hidden h-143.75 w-330.75 max-w-none lg:block"
      />

      <h2 className="relative font-display text-4xl font-medium leading-[1.4] text-ink sm:text-6xl lg:text-7xl">
        <span className="block">
          What we{" "}
          <span className="relative inline-block px-[0.1em]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[-0.08em] top-[0.62em] h-[0.95em] w-[calc(100%+0.16em)] -translate-y-1/2 rounded-full bg-mint"
            />
            <span className="relative">can</span>
          </span>
        </span>
        <span className="block">
          <span className="relative inline-block">
            <span className="relative">offer</span>
            <img
              src="/vectors/yellow-line.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[-6%] top-[1em] h-[0.45em] w-[123%] max-w-none"
            />
          </span>{" "}
          you!
        </span>
      </h2>

      <ul className="mt-12 border-t border-ink/15 lg:mt-16">
        {SERVICES.map((service) => (
          <ServiceRow key={service.title} {...service} />
        ))}
      </ul>
    </section>
  );
}
