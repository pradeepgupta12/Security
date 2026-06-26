// Metadata wrapper for the Contact page. The page itself is a client
// component, so its SEO metadata is declared here in a server layout.
export const metadata = {
  title: "Contact Us | LFM Group Security & Facility Management",
  description: "Get in touch with LFM Group Security & Facility Management Pvt. Ltd. — offices across Mumbai, Hyderabad and Lucknow serving clients pan India.",
};

export default function ContactLayout({ children }) {
  return children;
}
