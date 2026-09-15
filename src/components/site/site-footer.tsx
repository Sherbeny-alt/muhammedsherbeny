import { profile } from "@/lib/portfolio";
import { ArrowIcon } from "@/lib/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
        >
          Back to top
          <ArrowIcon className="size-4 -rotate-90 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
