import Link from "next/link";
import siteData from "@/lib/data";
import Image from "next/image";

export default function Footer() {
  const { company, footer } = siteData;
  return (
    <footer className="bg-gray-300 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand with Logo */}
        <div>
          <div className="flex items-center gap-3 -mb-3">
  <div className="relative w-40 h-40 flex-shrink-0 -mt-15">
    <Image
      src="/images/Logo.png"
      alt="Company Logo"
      fill
      className="object-contain"
      sizes="(max-width: 48px) 100vw, 48px"
    />
  </div>
</div>
          <p className="text-black text-xs leading-relaxed">{footer.description}</p>
        </div>

        {/* Registered Address */}
        <div>
          <h3 className="font-black text-xs uppercase tracking-widest mb-4 text-black">Registered Address</h3>
          <div className="space-y-2 text-black text-xs">
            <p className="flex gap-2">
              <span className="text-red-500 mt-0.5 flex-shrink-0">📍</span>
              <span className="break-words">{company.registeredAddress}</span>
            </p>
            <p className="font-bold text-black uppercase tracking-wide text-xs mt-3">Corporate Address</p>
            <p className="flex gap-2">
              <span className="text-red-500 mt-0.5 flex-shrink-0">📍</span>
              <span className="break-words">{company.corporateAddress}</span>
            </p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-black text-xs uppercase tracking-widest mb-4 text-black">Contact Us</h3>
          <div className="space-y-2 text-black text-xs">
            {company.phone.map((p, i) => (
              <p key={i} className="flex gap-2 break-words">
                <span className="text-red-500 flex-shrink-0">📞</span>
                <span className="break-all">{p}</span>
              </p>
            ))}
            <p className="flex gap-2 break-words">
              <span className="text-red-500 flex-shrink-0">✉️</span>
              <span className="break-all">{company.email}</span>
            </p>
            <p className="flex gap-2">
              <span className="text-red-500 flex-shrink-0">🕐</span>
              <span>{company.hours}</span>
            </p>
          </div>
        </div>

        {/* Social / Find Us */}
        <div>
          <h3 className="font-black text-xs uppercase tracking-widest mb-4 text-black ">Find Us In</h3>
          <p className="text-black text-xs mb-4 leading-relaxed">
            Everyday is a new day for us and we work really hard to satisfy our customers everywhere.
          </p>
          <div className="flex gap-2 flex-wrap">
            {Object.entries(company.social).map(([key, url]) => {
              const icons = { facebook: "f", twitter: "t", instagram: "in", youtube: "yt", linkedin: "li" };
              return (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 hover:bg-red-600 rounded flex items-center justify-center text-[10px] font-bold transition-colors"
                  aria-label={key}>
                  {icons[key]}
                </a>
              );
            })}
          </div>
          <div className="mt-6 space-y-1">
            <h4 className="font-black text-xs uppercase tracking-widest text-black mb-2">Quick Links</h4>
            {[
              { label: "Clients", href: "/clients" },
              { label: "Career", href: "/career" },
              { label: "Presence", href: "/presence" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="block text-black text-xs hover:text-red-400 transition-colors">
                › {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-black text-xs text-center sm:text-left">{footer.copyright}</p>
          <div className="flex gap-4 flex-wrap justify-center">
            {["/clients", "/career", "/presence", "/contact"].map(href => (
              <Link key={href} href={href} className="text-gray-500 text-xs hover:text-red-400 transition-colors uppercase tracking-wide">
                {href.replace("/", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}