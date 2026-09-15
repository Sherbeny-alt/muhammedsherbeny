import { useState, type FormEvent } from "react";

import { profile, sections, socials } from "@/lib/portfolio";
import { ArrowIcon, MailIcon, PinIcon, SendIcon, socialIcons } from "@/lib/icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function SiteContact() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const mailtoFallback = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio enquiry from ${values.name || "a visitor"}`,
  )}&body=${encodeURIComponent(values.message || "")}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name || name.length > 100) {
      setStatus("error");
      setFeedback("Please add your name (under 100 characters).");
      return;
    }
    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      setStatus("error");
      setFeedback("Please check the email address so I can reply.");
      return;
    }
    if (message.length < 10) {
      setStatus("error");
      setFeedback("A few more words would help — at least 10 characters.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website: honeypot }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        mailto?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error ?? "That didn't go through. Please try again.");
        return;
      }

      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Connection trouble — please send it straight from your email app.");
    }
  }

  return (
    <section id="contact" className="relative border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            number={sections.contact.number}
            kicker={sections.contact.kicker}
            title={sections.contact.title}
            intro={sections.contact.intro}
          />

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col gap-5">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 text-foreground transition-colors hover:text-gold"
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-border text-gold">
                  <MailIcon className="size-5" />
                </span>
                <span className="text-sm font-medium break-all sm:text-base">{profile.email}</span>
                <ArrowIcon className="size-4 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </a>

              <p className="flex items-center gap-4 text-muted-foreground">
                <span className="flex size-11 items-center justify-center rounded-full border border-border text-azure">
                  <PinIcon className="size-5" />
                </span>
                {profile.location}
              </p>

              <p className="flex items-center gap-4 text-muted-foreground">
                <span className="flex size-11 items-center justify-center rounded-full border border-border">
                  <span
                    aria-hidden
                    className="size-2.5 animate-pulse-dot rounded-full bg-[oklch(0.72_0.19_155)]"
                  />
                </span>
                {profile.availability}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-2.5 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
                    >
                      <Icon className="size-4" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="panel relative overflow-hidden rounded-2xl p-7 sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-fill"
            />

            {status === "sent" ? (
              <div className="flex min-h-80 flex-col justify-center">
                <h3 className="font-display text-3xl font-semibold text-gilded">
                  Message received.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Thanks for reaching out — your note is saved and I'll get back to you. If you'd
                  like it to land faster, send the same message straight from your email app.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={mailtoFallback}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-xs font-bold tracking-[0.16em] text-gold uppercase transition-colors hover:bg-gold/10"
                  >
                    <MailIcon className="size-4" />
                    Open in email app
                  </a>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                  >
                    Write another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="absolute top-0 left-0 h-0 w-0 opacity-0"
                />

                <Field
                  id="contact-name"
                  label="Your name"
                  placeholder="Aisha Nasser"
                  value={values.name}
                  onChange={(name) => setValues((current) => ({ ...current, name }))}
                />
                <Field
                  id="contact-email"
                  label="Email address"
                  type="email"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(email) => setValues((current) => ({ ...current, email }))}
                />
                <Field
                  id="contact-message"
                  label="Message"
                  as="textarea"
                  placeholder="Tell me about the role or project…"
                  value={values.message}
                  onChange={(message) => setValues((current) => ({ ...current, message }))}
                />

                {status === "error" ? (
                  <p role="alert" className="text-sm font-medium text-crimson">
                    {feedback}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-crimson transition-transform duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
                >
                  <SendIcon className="size-4" />
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Prefer email?{" "}
                  <a href={`mailto:${profile.email}`} className="text-gold hover:underline">
                    {profile.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
};

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  as = "input",
}: FieldProps) {
  const shared = {
    id,
    name: id.replace("contact-", ""),
    placeholder,
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(event.target.value),
    className:
      "w-full border-0 border-b border-input bg-transparent px-0 py-2.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/55 focus:border-gold",
    required: true,
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase"
      >
        {label}
      </label>
      <div className="mt-2">
        {as === "textarea" ? (
          <textarea {...shared} rows={4} className={`${shared.className} resize-none`} />
        ) : (
          <input {...shared} type={type} />
        )}
      </div>
    </div>
  );
}
