import HeroSection from "@/components/sections/HeroSection";
import WhatsAppBanner from "@/components/sections/WhatsAppBanner";
import ProfileNumbers from "@/components/sections/ProfileNumbers";
import SS4GroupSection from "@/components/sections/SS4GroupSection";
import SecurityGuardsSection from "@/components/sections/SecurityGuardsSection";
import AssociationsSection from "@/components/sections/AssociationsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MediaGallerySection from "@/components/sections/MediaGallerySection";
import GallerySection from "@/components/sections/GallerySection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ClientsSection from "@/components/sections/ClientsSection";

export const metadata = {
  title: "JSS Group Security & Facility Management Pvt. Ltd. | India's Leading Security Agency",
  description: "JSS Group Security & Facility Management — India's most trusted security agency. Industrial security, executive protection, female security, dog squad, PSARA licensed. Pan India since 2017.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatsAppBanner />
      <ProfileNumbers />
      <SS4GroupSection />
      <SecurityGuardsSection />
      <AssociationsSection />
      <ServicesSection />
      <MediaGallerySection />
      <GallerySection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <ClientsSection />
    </>
  );
}
