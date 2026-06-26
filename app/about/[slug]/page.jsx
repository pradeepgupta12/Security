import { notFound } from "next/navigation";
import FounderAbout from "@/components/about/FounderAbout";
import ProfileAbout from "@/components/about/ProfileAbout";
import VisionAbout from "@/components/about/VisionAbout";
import MissionAbout from "@/components/about/MissionAbout";
import CertificationAbout from "@/components/about/CertificationAbout";
import TestimonialsAbout from "@/components/about/TestimonialsAbout";


// Data-driven About section. Each slug maps to its own layout component and
// metadata, so every page renders exactly as it did when it lived in its own
// folder — the routing is now dynamic while the visuals are unchanged.
const aboutPages = {
  "our-founder": {
    Component: FounderAbout,
    metadata: {
      title: "Our Founder | LFM Group Security & Facility Management",
      description: "Meet the founders of LFM Group Security & Facility Management Pvt. Ltd.",
    },
  },
  "our-profile": {
    Component: ProfileAbout,
    metadata: {
      title: "Our Profile | LFM Group Security & Facility Management",
      description: "Learn about LFM Group Security & Facility Management profile and company background.",
    },
  },
  "our-vision": {
    Component: VisionAbout,
    metadata: {
      title: "Our Vision | LFM Group Security & Facility Management",
      description: "LFM Group Security & Facility Management vision for a secure and productive environment.",
    },
  },
  "our-mission": {
    Component: MissionAbout,
    metadata: {
      title: "Our Mission | LFM Security Management",
      description: "LFM Security Management mission to provide highest quality security services.",
    },
  },
  "our-certification": {
    Component: CertificationAbout,
    metadata: {
      title: "Our Certification | LFM Group Security & Facility Management",
      description: "LFM Group Security & Facility Management ISO certifications, PASARA licenses and company documents.",
    },
  },
  "testimonials": {
    Component: TestimonialsAbout,
    metadata: {
      title: "Testimonials | LFM Group Security & Facility Management",
      description: "Client testimonials and feedback for LFM Group Security & Facility Management Pvt. Ltd.",
    },
  },
  
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(aboutPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return aboutPages[slug]?.metadata || {};
}

export default async function AboutSlugPage({ params }) {
  const { slug } = await params;
  const page = aboutPages[slug];

  if (!page) notFound();

  const { Component } = page;
  return <Component />;
}
