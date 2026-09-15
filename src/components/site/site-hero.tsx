import heroImage from "@/assets/hero-night.jpg";
import { profile, stats } from "@/lib/portfolio";
import { ArrowIcon, MailIcon } from "@/lib/icons";
import { Reveal } from "./reveal";

export function SiteHero() {
  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-svh flex-col justify-end overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Mountain range at night above a still lake with a golden horizon"
        className="absolute inset-0 -z-20 size-full animate-drift object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[image:var(--gradient-veil)]" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[60vh] animate-sheen bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.81_0.135_86/18%),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-1/2 -z-10 h-72 w-[min(90rem,140vw)] -translate-x-1/2 bg-[radial-gradient(closest-side,oklch(0.63_0.17_254/22%),transparent)]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-14 sm:px-8 sm:pb-20">

        {/* قسم شبكي يجمع الكلام على الشمال والصورة على اليمين */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* الجزء الشمال (ياخذ 7 أعمدة من أصل 12) */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-kicker">{profile.role}</p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.92] font-bold tracking-tight">
                <span className="block text-foreground">{profile.firstName}</span>
                <span className="block text-gilded italic">{profile.lastName}</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {profile.headline}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-crimson transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View my work
                  <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-3 rounded-full border border-gold/40 px-7 py-3.5 text-xs font-bold tracking-[0.18em] text-gold uppercase transition-colors duration-300 hover:border-gold hover:bg-gold/15"
                >
                  <MailIcon className="size-4" />
                  Email me
                </a>
              </div>
            </Reveal>
          </div>

          {/* الجزء اليمين: صورتك الشخصية (تاخد 5 أعمدة من أصل 12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={200}>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-gold/40 shadow-2xl shadow-gold/10 group bg-ink/40 backdrop-blur-sm">
                <img
                  src="/profile.jpg"
                  alt="Muhammed Sherbeny"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

        </div>

        {/* قسم الإحصائيات في الأسفل زي ما هو */}
        <Reveal delay={340}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/70 bg-border/40 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink/70 px-5 py-4 backdrop-blur-sm">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl leading-none font-semibold text-gold">
                  {stat.value}
                </dd>
                <dd className="mt-2 text-[0.68rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

      </div>
    </section>
  );
}