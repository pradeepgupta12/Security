import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppBtn from "@/components/ui/WhatsAppBtn";
import CustomCursor from "@/components/common/CustomCursor";
import FlowerRain from "@/components/common/FlowerRain";
import PageLoader from "@/components/common/PageLoader";
import ScrollAnimations from "@/components/common/ScrollAnimations";

export const metadata = {
  title: { default: "LFM Group Security & Facility Management Pvt. Ltd. | India's Leading Security Agency", template: "%s | LFM Security" },
  description: "LFM Group Security & Facility Management Pvt. Ltd. — India's fastest growing security agency. Industrial security, executive protection, female security, PSARA licensed. Pan India since 2017.",
  keywords: ["security agency india", "LFM security", "industrial security", "bodyguard services", "kanpur security", "pan india security", "psara licensed"],
  openGraph: { type: "website", locale: "en_IN", siteName: "LFM Group Security & Facility Management Pvt. Ltd." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }} className="bg-white text-gray-900 antialiased">
        <PageLoader />
        <CustomCursor />
        <FlowerRain />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppBtn />
        <ScrollAnimations />
      </body>
    </html>
  );
}
