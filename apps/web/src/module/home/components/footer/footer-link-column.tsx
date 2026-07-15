interface FooterLinkColumnProps {
  heading: string;
  links: readonly string[];
}

export default function FooterLinkColumn({ heading, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="font-display text-2xl font-medium text-ink lg:text-[28px]">{heading}</h3>
      <ul className="mt-6 flex flex-col gap-[21px]">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="font-body text-[17px] text-ink hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
