// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ChevronDown, Menu, X } from "lucide-react";
// import siteData from "@/lib/data";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDrop, setOpenDrop] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     setOpenDrop(null);
//   }, [pathname]);

//   const toggleDrop = (label) => setOpenDrop(openDrop === label ? null : label);

//   return (
//     <>
//       {/* Top bar */}
//       <div className="bg-red-600 text-white text-xs py-1.5 hidden md:block">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <div className="flex gap-5">
//             <span>📞 {siteData.company.phone[0]}</span>
//             <span>✉️ {siteData.company.email}</span>
//           </div>
//           <span>{siteData.company.hours}</span>
//         </div>
//       </div>

//       {/* Main nav */}
//       <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between h-16">

//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2 flex-shrink-0">
//               <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
//                 <span className="text-white font-black text-sm">SS4</span>
//               </div>
//               <div className="hidden sm:block leading-tight">
//                 <div className="font-black text-sm text-gray-900">SS4 SECURITY</div>
//                 <div className="text-[10px] text-gray-500">MANAGEMENT PVT. LTD.</div>
//               </div>
//             </Link>

//             {/* Desktop links */}
//             <div className="hidden lg:flex items-center gap-0.5">
//               {siteData.navbar.map((link) => (
//                 <div key={link.label} className="relative group">
//                   {link.dropdown ? (
//                     <>
//                       <button className="flex items-center gap-0.5 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
//                         {link.label}
//                         <ChevronDown size={11} className="group-hover:rotate-180 transition-transform duration-200" />
//                       </button>
//                       <div className="absolute left-0 top-full w-64 bg-white shadow-xl border-t-2 border-red-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                         {link.dropdown.map((item) => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`block px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide border-b border-gray-100 hover:bg-red-50 hover:text-red-600 transition-colors last:border-0 ${pathname === item.href ? "text-red-600 bg-red-50" : "text-gray-700"}`}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     </>
//                   ) : (
//                     <Link
//                       href={link.href}
//                       className={`px-3 py-2 text-[11px] font-bold uppercase tracking-wide transition-colors whitespace-nowrap ${pathname === link.href ? "text-red-600" : "text-gray-800 hover:text-red-600"}`}
//                     >
//                       {link.label}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//               <Link href="/about/our-certification" className="ml-2 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded hover:bg-red-700 transition-colors whitespace-nowrap">
//                 📄 PROFILE PDF
//               </Link>
//             </div>

//             {/* Mobile toggle */}
//             <button className="lg:hidden p-2 text-gray-800" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
//               {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {mobileOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
//             {siteData.navbar.map((link) => (
//               <div key={link.label} className="border-b border-gray-100">
//                 {link.dropdown ? (
//                   <>
//                     <button
//                       className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold uppercase tracking-wide text-gray-800"
//                       onClick={() => toggleDrop(link.label)}
//                     >
//                       {link.label}
//                       <ChevronDown size={15} className={`transition-transform ${openDrop === link.label ? "rotate-180" : ""}`} />
//                     </button>
//                     {openDrop === link.label && (
//                       <div className="bg-gray-50">
//                         {link.dropdown.map((item) => (
//                           <Link
//                             key={item.href}
//                             href={item.href}
//                             className={`block px-8 py-2.5 text-xs font-semibold uppercase tracking-wide border-b border-gray-100 last:border-0 hover:text-red-600 ${pathname === item.href ? "text-red-600" : "text-gray-600"}`}
//                           >
//                             {item.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link href={link.href} className={`block px-4 py-3 text-sm font-bold uppercase tracking-wide hover:text-red-600 ${pathname === link.href ? "text-red-600" : "text-gray-800"}`}>
//                     {link.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import siteData from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
  }, [pathname]);

  const toggleDrop = (label) => setOpenDrop(openDrop === label ?  null : label);

  return (
    <>
      {/* Top bar */}
      <div className="bg-black text-white text-xs md:text-sm py-2 md:py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-5">
            <span>📞 {siteData.company.phone[0]}</span>
            <span>✉️ {siteData.company.email}</span>
          </div>
          <span>{siteData.company.hours}</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-10 md:h-16">

            {/* Logo - Simple HTML img tag (temporary test) */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img 
                src="/Logo.png" 
                alt="JSS GROUP Logo" 
                className="w-25 h-25 md:w-45 md:h-40 object-contain"
                onError={(e) => {
                  console.error("Image load error");
                  e.target.style.display = 'none';
                }}
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteData.navbar.map((link) => (
                <div key={link.label} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold text-gray-800 hover:text-red-600 transition-colors whitespace-nowrap">
                        {link.label}
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      <div className="absolute left-0 top-full min-w-[220px] bg-white shadow-xl border-t-2 border-red-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-3 text-sm font-medium border-b border-gray-100 hover:bg-red-50 hover:text-red-600 transition-colors last:border-0 ${pathname === item.href ? "text-red-600 bg-red-50" : "text-gray-700"}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-3 xl:px-4 py-2 text-sm xl:text-base font-semibold transition-colors whitespace-nowrap ${pathname === link.href ? "text-red-600" : "text-gray-800 hover:text-red-600"}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden p-2 text-gray-800" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            {siteData.navbar.map((link) => (
              <div key={link.label} className="border-b border-gray-100">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-4 text-base font-semibold text-gray-800"
                      onClick={() => toggleDrop(link.label)}
                    >
                      {link.label}
                      <ChevronDown size={18} className={`transition-transform ${openDrop === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDrop === link.label && (
                      <div className="bg-gray-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-6 py-3 text-sm font-medium border-b border-gray-100 last:border-0 hover:text-red-600 hover:bg-red-50 ${pathname === item.href ? "text-red-600 bg-red-50" : "text-gray-600"}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className={`block px-4 py-4 text-base font-semibold hover:text-red-600 hover:bg-gray-50 ${pathname === link.href ? "text-red-600 bg-red-50" : "text-gray-800"}`}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}