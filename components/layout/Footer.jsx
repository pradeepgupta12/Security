// import Link from "next/link";
// import siteData from "@/lib/data";
// import Image from "next/image";

// export default function Footer() {
//   const { company, footer } = siteData;
//   return (
//     <footer className="bg-gray-300 text-white">
//       <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Brand with Logo */}
//         <div>
//           <div className="flex items-center gap-3 -mb-3">
//   <div className="relative w-40 h-40 flex-shrink-0 -mt-15">
//     <Image
//       src="/images/Logo.png"
//       alt="Company Logo"
//       fill
//       className="object-contain"
//       sizes="(max-width: 48px) 100vw, 48px"
//     />
//   </div>
// </div>
//           <p className="text-black text-xs leading-relaxed">{footer.description}</p>
//         </div>

//         {/* Registered Address */}
//         <div>
//           <h3 className="font-black text-xs uppercase tracking-widest mb-4 text-black">Registered Address</h3>
//           <div className="space-y-2 text-black text-xs">
//             <p className="flex gap-2">
//               <span className="text-red-500 mt-0.5 flex-shrink-0">📍</span>
//               <span className="break-words">{company.registeredAddress}</span>
//             </p>
//             <p className="font-bold text-black uppercase tracking-wide text-xs mt-3">Corporate Address</p>
//             <p className="flex gap-2">
//               <span className="text-red-500 mt-0.5 flex-shrink-0">📍</span>
//               <span className="break-words">{company.corporateAddress}</span>
//             </p>
//           </div>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="font-black text-xs uppercase tracking-widest mb-4 text-black">Contact Us</h3>
//           <div className="space-y-2 text-black text-xs">
//             {company.phone.map((p, i) => (
//               <p key={i} className="flex gap-2 break-words">
//                 <span className="text-red-500 flex-shrink-0">📞</span>
//                 <span className="break-all">{p}</span>
//               </p>
//             ))}
//             <p className="flex gap-2 break-words">
//               <span className="text-red-500 flex-shrink-0">✉️</span>
//               <span className="break-all">{company.email}</span>
//             </p>
//             <p className="flex gap-2">
//               <span className="text-red-500 flex-shrink-0">🕐</span>
//               <span>{company.hours}</span>
//             </p>
//           </div>
//         </div>

//         {/* Social / Find Us */}
//         <div>
//           <h3 className="font-black text-xs uppercase tracking-widest mb-4 text-black ">Find Us In</h3>
//           <p className="text-black text-xs mb-4 leading-relaxed">
//             Everyday is a new day for us and we work really hard to satisfy our customers everywhere.
//           </p>
//           <div className="flex gap-2 flex-wrap">
//             {Object.entries(company.social).map(([key, url]) => {
//               const icons = { facebook: "f", twitter: "t", instagram: "in", youtube: "yt", linkedin: "li" };
//               return (
//                 <a key={key} href={url} target="_blank" rel="noopener noreferrer"
//                   className="w-8 h-8 bg-gray-700 hover:bg-red-600 rounded flex items-center justify-center text-[10px] font-bold transition-colors"
//                   aria-label={key}>
//                   {icons[key]}
//                 </a>
//               );
//             })}
//           </div>
//           <div className="mt-6 space-y-1">
//             <h4 className="font-black text-xs uppercase tracking-widest text-black mb-2">Quick Links</h4>
//             {[
//               { label: "Clients", href: "/clients" },
//               { label: "Career", href: "/career" },
//               { label: "Presence", href: "/presence" },
//               { label: "Contact", href: "/contact" },
//               { label: "Privacy Policy", href: "/privacy-policy" },
//             ].map(l => (
//               <Link key={l.href} href={l.href} className="block text-black text-xs hover:text-red-400 transition-colors">
//                 › {l.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-800 py-4">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
//           <p className="text-black text-xs text-center sm:text-left">{footer.copyright}</p>
//           <div className="flex gap-4 flex-wrap justify-center">
//             {["/clients", "/career", "/presence", "/contact"].map(href => (
//               <Link key={href} href={href} className="text-gray-500 text-xs hover:text-red-400 transition-colors uppercase tracking-wide">
//                 {href.replace("/", "")}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import siteData from "@/lib/data";

export default function Footer() {
  const { company, footer } = siteData;

  const socialIcons = {
    facebook: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    twitter: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    instagram: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    youtube: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="#111" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  };

  const quickLinks = [
    { label: "Clients", href: "/clients" },
    { label: "Career", href: "/career" },
    { label: "Presence", href: "/presence" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      {/* Red accent bar */}
      <div className="h-1 bg-red-600" />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ── Column 1: Brand ── */}
        <div className="flex flex-col gap-5">
          {/* Text Logo */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-tight text-white" style={{ letterSpacing: "-0.02em" }}>
              LFM Group
            </span>
            <span className="text-[11px] font-semibold italic tracking-wide text-red-500">
              Security &amp; Facility Management
            </span>
          </div>

          <p className="text-gray-400 text-xs leading-relaxed">
            {footer.description}
          </p>

          {/* Social icons */}
          <div className="flex gap-3 flex-wrap mt-1">
            {Object.entries(company.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="w-8 h-8 rounded-md bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                {socialIcons[key]}
              </a>
            ))}
          </div>
        </div>

        {/* ── Column 2: Addresses ── */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-red-500 mb-1">
            Our Addresses
          </h3>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
              Registered Office
            </p>
            <div className="flex gap-2 text-gray-400 text-xs leading-relaxed">
              <span className="text-red-500 mt-0.5 flex-shrink-0">📍</span>
              <span>{company.registeredAddress}</span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
              Corporate Office
            </p>
            <div className="flex gap-2 text-gray-400 text-xs leading-relaxed">
              <span className="text-red-500 mt-0.5 flex-shrink-0">📍</span>
              <span>{company.corporateAddress}</span>
            </div>
          </div>
        </div>

        {/* ── Column 3: Contact ── */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-red-500 mb-1">
            Contact Us
          </h3>

          <div className="flex flex-col gap-3">
            {company.phone.map((p, i) => (
              <div key={i} className="flex gap-2.5 items-start text-xs text-gray-400">
                <span className="text-red-500 flex-shrink-0 mt-0.5">📞</span>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white transition-colors break-all">
                  {p}
                </a>
              </div>
            ))}

            <div className="flex gap-2.5 items-start text-xs text-gray-400">
              <span className="text-red-500 flex-shrink-0 mt-0.5">✉️</span>
              <a href={`mailto:${company.email}`} className="hover:text-white transition-colors break-all">
                {company.email}
              </a>
            </div>

            <div className="flex gap-2.5 items-start text-xs text-gray-400">
              <span className="text-red-500 flex-shrink-0 mt-0.5">🕐</span>
              <span>{company.hours}</span>
            </div>
          </div>
        </div>

        {/* ── Column 4: Quick Links ── */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-red-500 mb-1">
            Quick Links
          </h3>

          <div className="flex flex-col gap-0.5">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center gap-2 py-2 border-b border-gray-800 text-gray-400 text-xs hover:text-white transition-colors last:border-0"
              >
                <span className="w-1 h-1 rounded-full bg-red-600 flex-shrink-0 group-hover:scale-150 transition-transform" />
                {l.label}
              </Link>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-gray-600 text-[10px] leading-relaxed mt-2 italic">
            "Every day is a new opportunity to serve and protect."
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-[11px] text-center sm:text-left">
            {footer.copyright}
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            {["/clients", "/career", "/presence", "/contact"].map((href) => (
              <Link
                key={href}
                href={href}
                className="text-gray-600 text-[11px] hover:text-red-500 transition-colors uppercase tracking-widest"
              >
                {href.replace("/", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}