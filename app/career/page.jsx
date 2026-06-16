// import siteData from "@/lib/data";

// export const metadata = {
//   title: "Career | SS4 Security Management",
//   description: "Join SS4 Security Management Pvt. Ltd. — Career opportunities in security services across India.",
// };

// const openings = [
//   { title: "Security Guard", location: "Pan India", type: "Full Time", exp: "0-2 Years" },
//   { title: "Supervisor", location: "Delhi/NCR, Kanpur, Gurugram", type: "Full Time", exp: "2-5 Years" },
//   { title: "Female Security Officer", location: "Pan India", type: "Full Time", exp: "0-3 Years" },
//   { title: "Dog Handler", location: "Delhi, Mumbai, Bangalore", type: "Full Time", exp: "1-3 Years" },
//   { title: "Fire Safety Officer", location: "Pan India", type: "Full Time", exp: "1-4 Years" },
//   { title: "HR Executive", location: "Kanpur, Gurugram", type: "Full Time", exp: "1-3 Years" },
//   { title: "Business Development Executive", location: "Pan India", type: "Full Time", exp: "2-5 Years" },
//   { title: "Operations Manager", location: "Delhi, Kanpur", type: "Full Time", exp: "5+ Years" },
// ];

// export default function CareerPage() {
//   const { company } = siteData;
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="mb-10 anim">
//         <h1 className="text-2xl font-black uppercase red-line mb-3">Career</h1>
//         <p className="text-gray-600 text-sm max-w-2xl leading-relaxed">
//           Join SS4 Security Management Pvt. Ltd. and be part of India&apos;s fastest growing security company. We offer exciting career opportunities across India with competitive salary and growth prospects.
//         </p>
//       </div>

//       {/* Why join us */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
//         {[
//           { icon: "🚀", title: "Fast Growth", desc: "Rapid career advancement in India's fastest growing security company" },
//           { icon: "💰", title: "Best Pay", desc: "Competitive salary packages with regular increments and bonuses" },
//           { icon: "🎓", title: "Free Training", desc: "World-class training programs to enhance your skills and capabilities" },
//         ].map((item, i) => (
//           <div key={i} className="anim bg-white border border-gray-200 rounded-lg p-5 hover:border-red-400 hover:shadow-md transition-all" style={{ transitionDelay: `${i * 100}ms` }}>
//             <div className="text-3xl mb-3">{item.icon}</div>
//             <h3 className="font-black text-sm uppercase tracking-wide mb-2">{item.title}</h3>
//             <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Job openings */}
//       <h2 className="text-xl font-black uppercase red-line mb-6 anim">Current Openings</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
//         {openings.map((job, i) => (
//           <div key={i} className="anim border border-gray-200 rounded-lg p-5 hover:border-red-400 hover:shadow-md transition-all" style={{ transitionDelay: `${i * 60}ms` }}>
//             <div className="flex justify-between items-start mb-2">
//               <h3 className="font-black text-sm uppercase tracking-wide">{job.title}</h3>
//               <span className="text-[10px] bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded uppercase">{job.type}</span>
//             </div>
//             <div className="flex gap-4 text-xs text-gray-500">
//               <span>📍 {job.location}</span>
//               <span>⏱ {job.exp}</span>
//             </div>
//             <a
//               href={`mailto:${company.email}?subject=Application for ${job.title}`}
//               className="mt-3 inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wide transition-colors rounded"
//             >
//               Apply Now
//             </a>
//           </div>
//         ))}
//       </div>

//       {/* Apply banner */}
//       <div className="anim bg-red-600 rounded-lg p-8 text-center text-white">
//         <h2 className="text-xl font-black uppercase mb-2">Don&apos;t See Your Role?</h2>
//         <p className="text-red-200 text-sm mb-5">Send your resume directly and we&apos;ll reach out when a suitable opening comes up.</p>
//         <a
//           href={`mailto:${company.email}?subject=General Application - SS4 Security`}
//           className="inline-block bg-white text-red-600 font-black px-8 py-3 text-sm uppercase tracking-wide hover:bg-red-50 transition-colors rounded"
//         >
//           Send Resume
//         </a>
//       </div>
//     </div>
//   );
// }


import CareerForm from "./CareerForm";

export const metadata = {
  title: "Career | JSS Group Security & Facility Management",
  description: "JSS Group Security & Facility Management. — Career opportunities in security services across India.",
};

export default function CareerPage() {
  return <CareerForm />;
}