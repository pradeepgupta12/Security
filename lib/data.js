// Aggregated site data.
//
// The content itself now lives in the dedicated data layer (`@/data/*`) and
// navigation in `@/constants/navigation`. This module re-assembles those
// domain modules into the single `siteData` object that components and pages
// have always consumed, so existing imports keep working unchanged.
//
// New code is encouraged to import directly from the focused modules, e.g.
// `import { services } from "@/data/services"`.

import {
  company,
  stats,
  hero,
  whatsapp,
  ourProfile,
  ss4Group,
  securityGuards,
  associations,
  whyChooseUs,
  presence,
  footer,
} from "@/data/company";
import { navbar } from "@/constants/navigation";
import { services } from "@/data/services";
import { about } from "@/data/about";
import { clients } from "@/data/clients";
import { gallery, eventGallery, mediaGallery, videos } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";

const siteData = {
  company,
  stats,
  navbar,
  hero,
  whatsapp,
  ourProfile,
  ss4Group,
  securityGuards,
  associations,
  services,
  mediaGallery,
  gallery,
  eventGallery,
  whyChooseUs,
  testimonials,
  clients,
  videos,
  presence,
  about,
  footer,
};

export default siteData;
