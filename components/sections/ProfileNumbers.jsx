// // import Link from "next/link";
// // import Counter from "@/components/Counter";
// // import siteData from "@/lib/data";

// // export default function ProfileNumbers() {
// //   return (
// //     <section className="py-14 bg-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
// //           {/* Profile */}
// //           <div className="anim">
// //             <h2 className="text-xl font-black uppercase red-line mb-5">Our Profile</h2>
// //             <p className="text-gray-600 text-sm leading-relaxed">{siteData.ourProfile.description}</p>
// //             <Link href="/about/our-profile"
// //               className="inline-block mt-5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-6 py-2.5 uppercase tracking-wide transition-colors">
// //               Read More
// //             </Link>
// //           </div>

// //           {/* Numbers Talk */}
// //           <div className="anim bg-red-600 p-8 rounded-lg">
// //             <h2 className="text-xl font-black uppercase text-white text-center mb-7 tracking-wide">
// //               Let&apos;s Numbers Talk
// //             </h2>
// //             <div className="grid grid-cols-2 gap-8">
// //               {siteData.stats.map((stat, i) => (
// //                 <div key={i} className="text-center">
// //                   <div className="text-3xl md:text-4xl font-black text-white mb-1">
// //                     <Counter target={stat.value} suffix={stat.suffix} />
// //                   </div>
// //                   <div className="text-red-200 text-xs font-semibold uppercase tracking-widest">
// //                     {stat.label}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import Link from "next/link";
// import Counter from "@/components/Counter";
// import siteData from "@/lib/data";

// export default function ProfileNumbers() {
//   return (
//     <section className="py-14 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
//           {/* Profile */}
//           <div className="anim">
//             <h2 className="text-2xl font-black uppercase red-line mb-5">
//               Our Profile
//             </h2>

//             <p className="text-gray-600 text-xl leading-relaxed">
//               {siteData.ourProfile.description}
//             </p>
//           </div>

//           {/* Numbers Talk */}
//           {/* Numbers Talk */}
// <div className="anim relative overflow-hidden rounded-3xl min-h-[500px] flex flex-col justify-center p-8 md:p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 shadow-2xl border border-slate-700">

//   {/* Glow Effects */}
//   <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
//   <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

//   {/* Header */}
//   <div className="relative z-10 text-center mb-12">
//     <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] rounded-full bg-white/5 border border-white/10 text-slate-300">
//       Company Statistics
//     </span>

//     <h2 className="mt-4 text-3xl md:text-4xl font-black text-white uppercase">
//       Let&apos;s Numbers Talk
//     </h2>

//     <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full" />
//   </div>

//   {/* Stats */}
//   <div className="relative z-10 grid grid-cols-2 gap-5 md:gap-6">
//     {siteData.stats.map((stat, i) => (
//       <div
//         key={`${stat.label}-${i}`}
//         className="
//           group
//           rounded-2xl
//           border border-white/10
//           bg-white/5
//           backdrop-blur-md
//           p-5
//           text-center
//           transition-all
//           duration-300
//           hover:bg-white/10
//           hover:-translate-y-1
//         "
//       >
//         <div className="text-3xl md:text-5xl font-black text-white mb-3">
//           <Counter
//             target={stat.value}
//             suffix={stat.suffix}
//           />
//         </div>

//         <div className="text-slate-300 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em]">
//           {stat.label}
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import siteData from "@/lib/data";

function ValuePill({ text }) {
return ( <div
   className="
     bg-[#43A7B2]
     text-white
     font-semibold
     text-sm
     xl:text-base
     rounded-full
     px-6
     xl:px-8
     py-3
     min-w-[260px]
     text-center
     shadow-md
     transition-all
     duration-300
     hover:-translate-y-1
     hover:shadow-lg
   "
 >
{text} </div>
);
}

const leftVariant = {
hidden: {
opacity: 0,
x: -80,
},
visible: {
opacity: 1,
x: 0,
transition: {
duration: 0.8,
ease: "easeOut",
},
},
};

const rightVariant = {
hidden: {
opacity: 0,
x: 80,
},
visible: {
opacity: 1,
x: 0,
transition: {
duration: 0.8,
ease: "easeOut",
},
},
};

const topVariant = {
hidden: {
opacity: 0,
y: -60,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.8,
ease: "easeOut",
},
},
};

const bottomVariant = {
hidden: {
opacity: 0,
y: 60,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.8,
ease: "easeOut",
},
},
};

const cardVariant = {
hidden: {
opacity: 0,
y: 70,
scale: 0.9,
},
visible: (i) => ({
opacity: 1,
y: 0,
scale: 1,
transition: {
delay: i * 0.12,
duration: 0.7,
ease: "easeOut",
},
}),
};

export default function ProfileNumbers() {
return ( <section className="relative overflow-hidden bg-slate-50 py-20"> <div className="absolute inset-0 opacity-20"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,167,178,0.12),transparent_40%)]" /> <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(31,75,153,0.08),transparent_40%)]" /> </div>


  <div className="relative z-10 max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      <motion.div
        variants={leftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-[#1F4B99] mb-6">
          Our Values, Your Satisfaction
        </h2>

        <p className="text-lg leading-9 text-slate-600">
          {siteData.ourProfile.description}
        </p>
      </motion.div>

      <div className="hidden lg:block">
        <div className="space-y-8">

          <motion.div
            variants={topVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ValuePill text="Professionalism & Expertise" />
          </motion.div>

          <div className="flex justify-between gap-6">
            <motion.div
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ValuePill text="Eco-Friendly & Safe Cleaning" />
            </motion.div>

            <motion.div
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ValuePill text="Efficiency & Reliability" />
            </motion.div>
          </div>

          <div className="flex justify-between gap-6">
            <motion.div
              variants={leftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ValuePill text="Integrity & Transparency" />
            </motion.div>

            <motion.div
              variants={rightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ValuePill text="Continuous Improvement" />
            </motion.div>
          </div>

          <motion.div
            variants={bottomVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ValuePill text="Customer Satisfaction First" />
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden flex flex-wrap justify-center gap-4">
        {[
          "Professionalism & Expertise",
          "Eco-Friendly & Safe Cleaning",
          "Efficiency & Reliability",
          "Integrity & Transparency",
          "Continuous Improvement",
          "Customer Satisfaction First",
        ].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <ValuePill text={item} />
          </motion.div>
        ))}
      </div>
    </div>

    <div className="mt-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {siteData.stats.map((stat, index) => (
          <motion.div
            key={`${stat.label}-${index}`}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -5,
            }}
            className="
              bg-white
              rounded-2xl
              border
              border-slate-100
              shadow-lg
              p-5
              min-h-[140px]
              flex
              flex-col
              justify-between
            "
          >
            <h4 className="text-lg font-bold text-[#1F4B99]">
              {stat.label}
            </h4>

            <div className="text-[#43A7B2] text-4xl md:text-5xl font-black">
              <Counter
                target={stat.value}
                suffix={stat.suffix}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}