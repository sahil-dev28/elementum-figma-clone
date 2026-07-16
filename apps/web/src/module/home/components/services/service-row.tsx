type ServiceRowProps = {
  label: readonly string[];
  title: string;
  href: string;
  decor?: string;
};

export default function ServiceRow({
  label,
  title,
  href,
  decor,
}: ServiceRowProps) {
  return (
    <li className="border-b border-ink/15">
      <a
        href={href}
        className="group grid items-center gap-3 py-6 lg:grid-cols-[29%_1fr_auto] lg:gap-8 lg:py-8"
      >
        <p className="font-body text-base leading-[1.3] text-ink lg:text-[22px]">
          {label.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <h3 className="relative font-display text-xl font-medium leading-[1.4] text-ink sm:text-3xl lg:whitespace-nowrap lg:text-[42px]">
          {decor && (
            <img
              src={decor}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[59.50%] top-1/2 z-0 h-20 w-20 -translate-y-1/2 rounded-full object-cover sm:h-16 sm:w-16 lg:h-29 lg:w-29"
            />
          )}
          <span className="relative z-10">{title}</span>
        </h3>

        <span className="relative h-0.5 w-16 justify-self-start bg-ink transition-transform duration-300 group-hover:translate-x-2 lg:justify-self-end">
          <span className="absolute -right-px -top-1.25 h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-ink" />
        </span>
      </a>
    </li>
  );
}
