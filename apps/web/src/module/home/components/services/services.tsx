import ServiceRow from "./service-row";

const SERVICES = [
  {
    label: ["Office of multiple", "interest content"],
    title: "Collaborative & partnership",
    href: "#",
  },
  {
    label: ["The hanger US Air force", "digital experimental"],
    title: "We talk about our weight",
    href: "#",
  },
  {
    label: ["Delta faucet content,", "social, digital"],
    title: "Piloting digital confidence",
    href: "#",
  },
] as const;

export default function Services() {
  return (
    <section className="relative overflow-x-clip px-6 pb-16 pt-32 sm:pb-24 lg:px-[7.15%] lg:pt-78">
      <h2 className="font-display text-4xl font-medium leading-[1.4] text-ink sm:text-6xl lg:text-7xl">
        <span className="block">
          What we{" "}
          <span className="relative inline-block px-[0.1em]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-[0.12em] top-1/2 h-[1.35em] w-[calc(100%+0.24em)] -translate-y-1/2 rounded-full bg-mint"
            />
            <span className="relative">can</span>
          </span>
        </span>
        <span className="block">
          <span className="relative inline-block">
            <span className="relative">offer</span>
            <img
              src="/vectors/Yellow%20line.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-[8%] top-[0.98em] h-[0.5em] w-[118%] max-w-none"
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
