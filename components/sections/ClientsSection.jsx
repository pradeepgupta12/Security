// import Link from "next/link";
// import siteData from "@/lib/data";

// export default function ClientsSection() {
//   const doubled = [...siteData.clients, ...siteData.clients];
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 mb-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center anim">
//           <div>
//             <h2 className="text-xl font-black uppercase red-line mb-3">Our Reputed Clients</h2>
//             <p className="text-gray-500 text-xs leading-relaxed">
//               Our client list represents itself with no issue. Since our earliest days, we've addressed all that from new businesses to Fortune 500 organizations.
//             </p>
//           </div>
//           <div className="md:col-span-2 overflow-hidden">
//             <div className="flex gap-5 marquee-inner" style={{ width: "max-content" }}>
//               {doubled.map((name, i) => (
//                 <div key={i}
//                   className="bg-white border border-gray-200 rounded px-6 py-3 flex items-center justify-center flex-shrink-0 hover:border-red-400 transition-colors"
//                   style={{ minWidth: 130, height: 55 }}>
//                   <span className="text-xs font-bold text-gray-700 text-center">{name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="text-center">
//         <Link href="/clients"
//           className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-3 text-sm uppercase tracking-wide transition-colors">
//           View All Clients
//         </Link>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import siteData from "@/lib/data";
import { useState } from "react";

export default function ClientsSection() {
  const doubled = [...siteData.clients, ...siteData.clients];
  const [failedImages, setFailedImages] = useState({});
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center anim">
          <div>
            <h2 className="text-xl font-black uppercase red-line mb-3">Our Reputed Clients</h2>
            <p className="text-gray-500 text-xs leading-relaxed">
              Our client list represents itself with no issue. Since our earliest days, we've addressed all that from new businesses to Fortune 500 organizations.
            </p>
          </div>
          <div className="md:col-span-2 overflow-hidden">
            <div className="flex gap-5 marquee-inner" style={{ width: "max-content" }}>
              {doubled.map((client, i) => (
                <div key={i}
                  className="bg-white border border-gray-200 rounded px-3 py-2 flex items-center justify-center flex-shrink-0 hover:border-red-400 transition-colors"
                  style={{ minWidth: 150, height: 70 }}>
                  {failedImages[i] ? (
                    <span className="text-xs font-bold text-gray-700 text-center">
                      {client.name.length > 25 ? client.name.substring(0, 22) + '...' : client.name}
                    </span>
                  ) : (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-12 max-w-full object-contain"
                      onError={() => {
                        setFailedImages(prev => ({ ...prev, [i]: true }));
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link href="/clients"
          className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-3 text-sm uppercase tracking-wide transition-colors">
          View All Clients
        </Link>
      </div>
    </section>
  );
}