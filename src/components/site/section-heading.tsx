import { Reveal } from "./reveal";

type SectionHeadingProps = {
  number: string;
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  number,
  kicker,
  title,
  intro,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <p
        className={`label-kicker flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${
          light ? "text-accent-foreground" : ""
        }`}
      >
        <span
          className={`font-display text-base italic ${light ? "text-accent-foreground/60" : "text-gold/70"}`}
        >
          {number}
        </span>
        <span
          aria-hidden
          className={`h-px w-10 ${
            light
              ? "bg-gradient-to-r from-accent-foreground/50 to-transparent"
              : "bg-gradient-to-r from-gold/70 to-transparent"
          }`}
        />
        {kicker}
      </p>
      <h2
        className={`mt-5 font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-5xl ${
          light ? "text-accent-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? "text-accent-foreground/75" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
