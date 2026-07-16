import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

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
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handlePointer = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (toggleRef.current?.contains(target)) return;
      setOpen(false);
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <header className="relative bg-cream">
      <div className="relative flex items-center justify-between px-6 py-6 sm:px-8">
        <Link
          to="/"
          className="font-display text-3xl text-ink"
          onClick={closeMenu}
        >
          Elementum
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 min-[900px]:flex">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.label} item={item} className={LINK_CLASS} />
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="mr-10 flex flex-col items-end gap-1.5 sm:mr-40"
        >
          <span className="block h-0.5 w-7 bg-ink" />
          <span className="block h-0.5 w-7 bg-ink" />
        </button>
      </div>

      {open ? (
        <nav
          ref={menuRef}
          className="absolute right-6 top-full z-50 flex min-w-40 flex-col gap-3 rounded-lg border border-ink/10 bg-cream px-6 py-4 shadow-lg sm:right-8"
        >
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
