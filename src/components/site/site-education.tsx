import { education, sections } from "@/lib/portfolio";
import { CapIcon, SparkIcon, BrainIcon } from "@/lib/icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = { cap: CapIcon, spark: SparkIcon, brain: BrainIcon } as const;

export function SiteEducation() {
  return (
    <section
      id="education"
      className="grain relative isolate overflow-hidden border-t border-border/60 py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-azure-fill" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/70" />
      <div
        aria-hidden
        className="absolute -top-32 right-0 -z-10 h-96 w-[40rem] bg-[radial-gradient(closest-side,oklch(0.81_0.135_86/14%),transparent)]"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            number={sections.education.number}
            kicker={sections.education.kicker}
            title={sections.education.title}
          />
        </div>

        <ol className="flex flex-col gap-6">
          {education.map((entry, index) => {
            const Icon = icons[entry.icon];

            return (
              <Reveal as="li" key={entry.title} delay={index * 120}>
                <div className="panel rounded-2xl p-7 transition-colors duration-500 hover:border-gold/45">
                  <div className="flex items-start gap-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold uppercase">
                        {entry.period}
                      </p>
                      <h3 className="mt-2.5 font-display text-2xl leading-snug font-semibold">
                        {entry.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-semibold text-azure">{entry.org}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {entry.note}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
