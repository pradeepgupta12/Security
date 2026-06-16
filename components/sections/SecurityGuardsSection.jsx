// import siteData from "@/lib/data";

// export default function SecurityGuardsSection() {
//   return (
//     <section className="relative w-full h-64 md:h-80 overflow-hidden">
//       <img src={siteData.securityGuards.imageUrl} alt="Our Security Guards"
//         className="w-full h-full object-cover" loading="lazy" />
//       <div className="absolute inset-0 bg-black/35" />
//       <div className="absolute inset-0 flex items-end justify-center pb-8">
//         <div className="bg-red-600 text-white font-black text-xl md:text-2xl px-10 py-3 uppercase tracking-widest">
//           Our Security Guards
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function SecurityGuardsSection() {
  return (
    <section className="relative w-full h-[320px] sm:h-[420px] md:h-[550px] lg:h-[700px]">
      <Image
        src="/Security.png"
        alt="Security Guards"
        fill
        priority
        sizes="100vw"
        className="object-contain object-top"
      />
    </section>
  );
}