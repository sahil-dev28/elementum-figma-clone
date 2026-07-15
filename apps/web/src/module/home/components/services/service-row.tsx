type ServiceRowProps = {
  /** One entry per rendered line — the design breaks every label after two. */
  label: readonly string[];
  title: string;
  href: string;
};

export default function ServiceRow({ label, title, href }: ServiceRowProps) {
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

        <h3 className="font-display text-xl font-medium leading-[1.4] text-ink sm:text-3xl lg:whitespace-nowrap lg:text-[42px]">
          {title}
        </h3>

        <span className="relative h-px w-16 justify-self-start bg-ink transition-all group-hover:w-20 lg:justify-self-end">
          <span className="absolute -right-px -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-ink" />
        </span>
      </a>
    </li>
  );
}
