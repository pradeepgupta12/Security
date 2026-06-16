


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "OUR FOUNDER", href: "/about/our-founder" },
  { label: "OUR PROFILE", href: "/about/our-profile" },
  { label: "OUR VISION", href: "/about/our-vision" },
  { label: "OUR MISSION", href: "/about/our-mission" },
  { label: "OUR CERTIFICATION", href: "/about/our-certification" },
  { label: "TESTIMONIALS", href: "/about/testimonials" },
  
];

export default function AboutSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-52 flex-shrink-0 h-fit self-start border border-gray-200 rounded-lg overflow-hidden bg-white">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`sidebar-link ${
            pathname === link.href ? "active" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </aside>
  );
}