import { skillGroups, sections } from "@/lib/portfolio";
import { CheckIcon } from "@/lib/icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const accents = {
  gold: {
    text: "text-gold",
    border: "border-gold/30",
    dot: "bg-gold",
    glow: "from-gold/12",
  },
  crimson: {
    text: "text-crimson",
    border: "border-crimson/35",
    dot: "bg-crimson",
    glow: "from-crimson/12",
  },
  azure: {
    text: "text-azure",
    border: "border-azure/35",
    dot: "bg-azure",
    glow: "from-azure/12",
  },
} as const;

export function SiteSkills() {
  return (
    <section id="skills" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number={sections.skills.number}
          kicker={sections.skills.kicker}
          title={sections.skills.title}
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {skillGroups.map((group, index) => {
            const accent = accents[group.accent];

            return (
              <Reveal key={group.title} delay={index * 110} className="h-full">
                <div
                  className={`panel group relative flex h-full flex-col overflow-hidden rounded-2xl border ${accent.border} p-8`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${accent.glow} to-transparent opacity-70`}
                  />
                  <div className="relative flex items-center gap-3">
                    <span aria-hidden className={`size-2 rounded-full ${accent.dot}`} />
                    <h3 className={`font-display text-2xl font-semibold ${accent.text}`}>
                      {group.title}
                    </h3>
                  </div>

                  <ul className="relative mt-7 flex flex-1 flex-col gap-4">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-base text-muted-foreground transition-colors group-hover:text-foreground"
                      >
                        <CheckIcon className={`size-4 shrink-0 ${accent.text}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
