// import siteData from "@/lib/data";

// export default function SS4GroupSection() {
//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="text-center mb-7 anim">
//           <div className="inline-block bg-red-600 text-white px-8 py-2 rounded font-black text-sm uppercase tracking-widest">
//             SS4 GROUP — Since 2017
//           </div>
//           <p className="text-gray-400 text-xs mt-1 tracking-wide">Build on Integrity</p>
//         </div>
//         <div className="flex flex-wrap justify-center gap-4 anim">
//           {siteData.ss4Group.map((name, i) => (
//             <div key={i}
//               className="bg-white border border-gray-200 rounded-lg px-5 py-3 hover:border-red-400 hover:shadow-sm transition-all min-w-[130px] text-center">
//               <span className="text-xs font-bold text-gray-700">{name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function SS4GroupSection() {
  return (
    <section className="-mt-8 md:-mt-12 lg:-mt-16">
      <Image
        src="/JSS.png"
        alt="JSS"
        width={2000}
        height={800}
        priority
        className="w-full h-auto object-contain scale-y-95"
      />
    </section>
  );
}