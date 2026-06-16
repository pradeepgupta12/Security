// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import siteData from "@/lib/data";

// export default function ServicesSidebar() {
//   const pathname = usePathname();
//   const links = siteData.navbar.find(n => n.label === "Services")?.dropdown || [];
//   return (
//     <aside className="w-full lg:w-52 flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
//       {links.map((l) => (
//         <Link key={l.href} href={l.href} className={`sidebar-link ${pathname === l.href ? "active" : ""}`}>
//           {l.label.toUpperCase()}
//         </Link>
//       ))}
//     </aside>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import siteData from "@/lib/data";

export default function ServicesSidebar() {
  const pathname = usePathname();

  const links =
    siteData.navbar.find((n) => n.label === "Services")?.dropdown || [];

  return (
    <aside className="w-full lg:w-52 flex-shrink-0 h-fit self-start border border-gray-200 rounded-lg overflow-hidden bg-white">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={`sidebar-link ${pathname === l.href ? "active" : ""}`}
        >
          {l.label.toUpperCase()}
        </Link>
      ))}
    </aside>
  );
}