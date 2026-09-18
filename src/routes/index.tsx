import { createFileRoute } from "@tanstack/react-router";

import { SiteAbout } from "@/components/site/site-about";
import { SiteContact } from "@/components/site/site-contact";
import { SiteEducation } from "@/components/site/site-education";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHero } from "@/components/site/site-hero";
import { SiteNav } from "@/components/site/site-nav";
import { SiteSkills } from "@/components/site/site-skills";
import { SiteWork } from "@/components/site/site-work";
import { profile, projects, skillGroups, socials } from "@/lib/portfolio";
import { SlideContainer } from "@/components/site/slide-container";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Data Analyst · Data Science & AI Undergraduate",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zagazig",
    addressCountry: "EG",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Zagazig University" },
  knowsAbout: skillGroups.flatMap((group) => group.items),
  sameAs: socials.map((social) => social.href),
  makesOffer: projects.map((project) => ({
    "@type": "Offer",
    itemOffered: { "@type": "CreativeWork", name: project.title },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Abdulfttah" },
      {
        name: "description",
        content:
          "Data analyst portfolio of Muhammed Abdulfttah — house price prediction, churn modelling, SQL and Power BI reporting. Open to internships and junior roles.",
      },
      { property: "og:title", content: "Muhammed Abdulfttah | Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, skills and education of Muhammed Abdulfttah: Python, SQL, scikit-learn and Power BI work that turns data into decisions.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Muhammed Abdulfttah | Data Analyst Portfolio" },
      {
        name: "twitter:description",
        content:
          "Python, SQL, scikit-learn and Power BI projects from a Data Science & AI undergraduate in Zagazig, Egypt.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  const slides = [
    { id: "hero", label: "Home", node: <SiteHero /> },
    { id: "about", label: "About", node: <SiteAbout /> },
    { id: "work", label: "Work", node: <SiteWork /> },
    { id: "skills", label: "Skills", node: <SiteSkills /> },
    { id: "education", label: "Education", node: <SiteEducation /> },
    { id: "contact", label: "Contact", node: <SiteContact /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <SlideContainer slides={slides} />
      <SiteFooter />
    </div>
  );
}