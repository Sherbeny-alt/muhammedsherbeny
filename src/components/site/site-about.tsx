import { about, profile } from "@/lib/portfolio";
import { Reveal } from "./reveal";

export function SiteAbout() {
  return (
    <section id="about" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <p className="label-kicker">{about.kicker}</p>
          <p className="mt-6 font-display text-3xl leading-[1.15] font-semibold text-gilded italic sm:text-4xl">
            {about.quote}
          </p>
          <div aria-hidden className="mt-8 h-px w-28 bg-gold-fill" />
        </Reveal>

        <div className="md:col-span-7 md:pt-12">
          {about.body.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 90}>
              <p className="text-lg leading-relaxed text-muted-foreground first:text-foreground">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <dt className="text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Based in
                </dt>
                <dd className="mt-1.5 font-display text-xl font-semibold">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Currently
                </dt>
                <dd className="mt-1.5 font-display text-xl font-semibold">
                  Seeking internships &amp; junior roles
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
