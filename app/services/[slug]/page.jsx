import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { services } from "@/data/services";
import { titleFromSlug } from "@/utils/slugify";

// Data-driven service pages. Every service in `@/data/services` is rendered
// through the shared ServiceDetailPage template at /services/<slug>.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const name = titleFromSlug(slug);
  return {
    title: `${name} | LFM Group Security & Facility Management`,
    description: `LFM Group Security & Facility Management provides professional ${name} services across India.`,
  };
}

export default async function ServiceSlugPage({ params }) {
  const { slug } = await params;

  if (!services.some((service) => service.slug === slug)) notFound();

  return <ServiceDetailPage slug={slug} />;
}
