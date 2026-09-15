import houseImage from "@/assets/project-house.jpg";
import churnImage from "@/assets/project-churn.jpg";
import { profile, projects, sections } from "@/lib/portfolio";
import { ArrowIcon } from "@/lib/icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const images = {
  "project-house": houseImage,
  "project-churn": churnImage,
} as const;

export function SiteWork() {
  return (
    <section id="projects" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number={sections.work.number}
          kicker={sections.work.kicker}
          title={sections.work.title}
        />

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {projects.map((project, index) => {
            const flipped = index % 2 === 1;

            return (
              <article
                key={project.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
              >
                <Reveal
                  className={`relative ${flipped ? "md:order-2" : ""}`}
                  delay={60}
                >
                  <div className="panel group relative overflow-hidden rounded-2xl">
                    <img
                      src={images[project.image as keyof typeof images]}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={912}
                      className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                    />
                    <span className="absolute top-5 left-6 font-display text-3xl font-bold text-gilded italic">
                      {project.index}
                    </span>
                  </div>
                </Reveal>

                <Reveal className={flipped ? "md:order-1" : ""} delay={140}>
                  <h3 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-foreground/90">
                    {project.summary}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {project.detail}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Tools used">
                    {project.stack.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-gold/25 bg-gold/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gold"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(`About your ${project.title} project`)}&body=${encodeURIComponent(
                      "Hi Muhammed,\n\nI saw your project on your portfolio and would love to hear more about it.\n\n",
                    )}`}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-azure transition-colors hover:text-gold"
                  >
                    Ask me about this project
                    <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
