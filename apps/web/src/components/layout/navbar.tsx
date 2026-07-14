import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Studio", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
  { label: "FAQs", href: "#" },
] as const;

type NavLinkItem = (typeof NAV_LINKS)[number];

const LINK_CLASS =
  "font-body text-base font-normal text-ink transition-opacity hover:opacity-60";

function NavLink({
  item,
  className,
  onNavigate,
}: {
  item: NavLinkItem;
  className?: string;
  onNavigate?: () => void;
}) {
  if ("to" in item) {
    return (
      <Link to={item.to} className={className} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className} onClick={onNavigate}>
      {item.label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative bg-cream">
      <div className="relative flex items-center justify-between px-8 py-6">
        {/* Wordmark (left) */}
        <Link
          to="/"
          className="font-display text-3xl text-ink"
          onClick={closeMenu}
        >
          Elementum
        </Link>

        {/* Primary nav (centered, >= 900px) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 min-[900px]:flex">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.label} item={item} className={LINK_CLASS} />
          ))}
        </nav>

        {/* Two-line hamburger (right, always visible) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-col items-end gap-1.5"
        >
          <span className="block h-0.5 w-7 bg-ink" />
          <span className="block h-0.5 w-7 bg-ink" />
        </button>
      </div>

      {/* Dropdown menu panel (opened via hamburger, all widths) */}
      {open ? (
        <nav className="absolute right-8 top-full z-50 flex min-w-40 flex-col gap-3 rounded-lg border border-ink/10 bg-cream px-6 py-4 shadow-lg">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className={LINK_CLASS}
              onNavigate={closeMenu}
            />
          ))}
        </nav>
      ) : null}
    </header>
  );
}
