  import { useEffect, useState } from "react";

import { navLinks, profile } from "@/lib/portfolio";
import { CloseIcon, MailIcon, MenuIcon } from "@/lib/icons";

function scrollToSection(
  href: string,
  event: React.MouseEvent<HTMLAnchorElement>
) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);

  if (el) {
    event.preventDefault();
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${scrolled
          ? "border-b border-border/70 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="#hero"
          onClick={(e) => scrollToSection("#hero", e)}
          className="font-display text-2xl leading-none font-bold tracking-tight text-gilded"
          aria-label={`${profile.name} — back to top`}
        >
          {profile.mark}
        </a>

        <nav
          aria-label="Sections"
          className="hidden items-center gap-9 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(link.href, e)}
              className="rule-grow text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase shadow-crimson transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <MailIcon className="size-4" />
            Email me
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 md:hidden"
          >
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav
          aria-label="Sections (mobile)"
          className="flex flex-col px-5 py-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                scrollToSection(link.href, e);
                setOpen(false);
              }}
              className="border-b border-border/40 py-3 text-sm font-medium text-muted-foreground last:border-0 hover:text-gold"
            >
              {link.label}
            </a>
          ))}

          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="my-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase"
          >
            <MailIcon className="size-4" />
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}
