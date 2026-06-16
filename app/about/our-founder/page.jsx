// import AboutSidebar from "@/components/AboutSidebar";
// import siteData from "@/lib/data";

// export const metadata = {
//   title: "Our Founder | JSS Group Security & Facility Management",
//   description: "Meet the founders of JSS Group Security & Facility Management Pvt. Ltd.",
// };

// export default function OurFounderPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <AboutSidebar />
//         <div className="flex-1 min-w-0">
//           <h1 className="text-2xl font-black uppercase red-line mb-8">Our Founders</h1>
//           {siteData.about.founders.map((f, i) => (
//             <div key={i} className="mb-12 anim">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//                 <div className="img-zoom rounded-lg overflow-hidden bg-gray-100">
//                   <img
//                     src={f.imageUrl}
//                     alt={f.name}
//                     className="w-full object-cover"
//                     style={{ maxHeight: 420 }}
//                     loading="lazy"
//                   />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-black uppercase tracking-wide mb-2">{f.name}</h2>
//                   <div className="w-7 h-0.5 bg-red-600 mb-3" />
//                   <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">{f.role}</p>
//                   <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import AboutSidebar from "@/components/AboutSidebar";
import siteData from "@/lib/data";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const contentVariant = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function OurFounderPage() {
  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <AboutSidebar />

          <div className="flex-1 min-w-0">
            <motion.div
              className="mb-10"
              variants={headingVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-[0.2em]">
                Leadership Team
              </span>

              <h1 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Meet Our Founders
              </h1>

              <div className="w-20 h-0.5 bg-red-600 rounded-full mt-4" />

              <p className="mt-4 text-base text-slate-600 max-w-3xl leading-7">
                The visionaries behind JSS Group who have built a trusted name
                in security and facility management through dedication,
                professionalism, and years of industry expertise.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {siteData.about.founders.map((f, i) => (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    shadow-md
                    hover:shadow-lg
                    hover:border-red-200
                    transition-all
                    duration-300
                    border
                    border-slate-100
                  "
                >
                  <div
                    className={`grid md:grid-cols-2 h-[320px] ${
                      i % 2 !== 0
                        ? "md:[&>*:first-child]:order-2"
                        : ""
                    }`}
                  >
                    <motion.div
                      variants={imageVariant}
                      className="relative overflow-hidden bg-slate-100 h-full"
                    >
                      <img
                        src={f.imageUrl}
                        alt={f.name}
                        loading="lazy"
                        className="
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </motion.div>

                    <motion.div
                      variants={contentVariant}
                      className="p-6 md:p-8 flex flex-col justify-center h-full"
                    >
                      <span
                        className="
                          inline-flex
                          w-fit
                          px-3
                          py-1
                          rounded-full
                          bg-red-50
                          text-red-600
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          mb-3
                        "
                      >
                        {f.role}
                      </span>

                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                        {f.name}
                      </h2>

                      <div className="w-16 h-0.5 bg-red-600 rounded-full mb-4" />

                      <p className="text-slate-600 leading-7 text-sm md:text-base">
                        {f.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}