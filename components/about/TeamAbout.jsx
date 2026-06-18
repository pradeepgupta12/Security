// import AboutSidebar from "@/components/layout/AboutSidebar";
// import siteData from "@/lib/data";

// export default function TeamAbout() {
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <AboutSidebar />
//         <div className="flex-1 min-w-0">
//           <h1 className="text-2xl font-black uppercase red-line-center text-center mb-8">
//             Our Team Member
//           </h1>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {siteData.about.team.map((member, i) => (
//               <div
//                 key={i}
//                 className="anim text-center group"
//                 style={{ transitionDelay: `${i * 60}ms` }}
//               >
//                 <div className="img-zoom rounded-lg overflow-hidden bg-gray-100 mb-3 aspect-[3/4]">
//                   <img
//                     src={member.imageUrl}
//                     alt={member.name}
//                     className="w-full h-full object-cover object-top"
//                     loading="lazy"
//                   />
//                 </div>
//                 <h3 className="font-black text-xs uppercase tracking-wide group-hover:text-red-600 transition-colors">
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-500 text-[10px] uppercase tracking-wide mt-0.5">
//                   - {member.role} -
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
