import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.75" y="5" width="18.5" height="14" rx="2.5" />
      <path d="m3.5 7 7.3 5.6a2 2 0 0 0 2.4 0L20.5 7" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.5 21l-4-8-8-4L21 3Z" />
    </svg>
  );
}

export function CapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
      <path d="M6 11v5.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V11" />
      <path d="M20.5 9.5v5" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18l-1.8-5.4-5.7-1.8L10.2 9 12 3.5Z" />
      <path d="M18.5 16.5 19 18l1.5.5-1.5.5-.5 1.5-.5-1.5L16.5 18l1.5-.5.5-1.5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V16" />
      <circle cx="7.5" cy="7.6" r="0.6" fill="currentColor" />
      <path d="M11.5 16v-5.5" />
      <path d="M11.5 12.4c0-1.2.9-2 2-2s2 .8 2 2.1V16" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19.5c-4 1.2-4-2.3-5.5-2.8m11 5.3v-3.6c0-1-.1-1.4-.5-2 2.5-.3 4.5-1.4 4.5-5a4 4 0 0 0-1.1-2.8 3.7 3.7 0 0 0-.1-2.8s-.9-.3-3 1.1a10.3 10.3 0 0 0-5.4 0C6.8 5.5 5.9 5.8 5.9 5.8a3.7 3.7 0 0 0-.1 2.8A4 4 0 0 0 4.7 11.4c0 3.6 2 5.1 4.5 5.4-.4.4-.5.9-.5 1.6v3.6" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M15 8h-1.6c-1 0-1.7.7-1.7 1.7V21" />
      <path d="M9.5 12.5h4.6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export const socialIcons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Facebook: FacebookIcon,
} as const;
