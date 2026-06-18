// Primary site navigation. Single source of truth for the Navbar and
// any sidebar that derives its links from the menu structure.
export const navbar = [
  { label: "Home", href: "/" },
  {
    label: "About", href: "/about/our-founder",
    dropdown: [
      { label: "Our Founder", href: "/about/our-founder" },
      { label: "Our Profile", href: "/about/our-profile" },
      { label: "Our Vision", href: "/about/our-vision" },
      { label: "Our Mission", href: "/about/our-mission" },
      { label: "Our Certification", href: "/about/our-certification" },
      { label: "Testimonials", href: "/about/testimonials" },

    ],
  },
  {
    label: "Services", href: "/services/industrial-security",
    dropdown: [
      { label: "Industrial Security", href: "/services/industrial-security" },
      { label: "Executive Protection / Body Guard", href: "/services/executive-protection" },
      { label: "Female Security Team", href: "/services/female-security-team" },
      { label: "Security Survey / Audit", href: "/services/security-survey-audit" },
      { label: "Safety and Fire Fighting", href: "/services/safety-fire-fighting" },
      { label: "Escorting Cash, Valuables & Documents", href: "/services/escorting-cash" },
      { label: "Dog Squad Services", href: "/services/dog-squad-services" },
      { label: "Human Resources", href: "/services/human-resources" },
    ],
  },
  { label: "Clients", href: "/clients" },
  {
    label: "Gallery", href: "/gallery/event-gallery",
    dropdown: [
      { label: "Event Gallery", href: "/gallery/event-gallery" },
      { label: "In Media", href: "/gallery/in-media" },
    ],
  },
  { label: "Videos", href: "/videos" },
  { label: "Presence", href: "/presence" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default navbar;
