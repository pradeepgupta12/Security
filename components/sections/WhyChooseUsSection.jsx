// import siteData from "@/lib/data";

// export default function WhyChooseUsSection() {
//   return (
//     <section className="relative py-16 overflow-hidden">
//       <img src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=1920&q=80"
//         alt="Why Choose Us" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
//       <div className="absolute inset-0 bg-black/70" />
//       <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
//         <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1 anim">WHY CHOOSE US</p>
//         <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-2 anim">What Sets Us Apart</h2>
//         <div className="w-9 h-0.5 bg-red-600 mx-auto mb-9" />
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
//           {siteData.whyChooseUs.map((f, i) => (
//             <div key={i}
//               className="anim flex flex-col items-center gap-3 p-5 border border-white/20 rounded hover:border-red-500 hover:bg-white/5 transition-all"
//               style={{ transitionDelay: `${i * 80}ms` }}>
//               <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-xl">
//                 {f.icon}
//               </div>
//               <span className="text-white font-bold text-xs uppercase tracking-wide text-center">{f.title}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import siteData from "@/lib/data";
import { motion } from "framer-motion";

const headingVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = [
  {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ willChange: "transform, opacity" }}
          className="text-center mb-16"
        >
          <p className="text-red-500 text-sm font-bold uppercase tracking-[4px] mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What Sets Us Apart
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400">
            Delivering excellence through professionalism, reliability,
            innovation, and a commitment to exceeding expectations.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {siteData.whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants[index % 3]}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              style={{ willChange: "transform, opacity" }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-colors duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-600/10 via-transparent to-red-500/5" />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ willChange: "transform" }}
                className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-500 text-2xl text-white shadow-lg shadow-red-500/30"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-center text-white font-bold text-sm md:text-base uppercase tracking-wide leading-relaxed">
                {item.title}
              </h3>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-red-500 to-red-300 transition-all duration-500 ease-out group-hover:w-full" />

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}