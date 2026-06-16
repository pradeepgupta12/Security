import siteData from "@/lib/data";

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=1920&q=80"
        alt="Why Choose Us" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1 anim">WHY CHOOSE US</p>
        <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-2 anim">What Sets Us Apart</h2>
        <div className="w-9 h-0.5 bg-red-600 mx-auto mb-9" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {siteData.whyChooseUs.map((f, i) => (
            <div key={i}
              className="anim flex flex-col items-center gap-3 p-5 border border-white/20 rounded hover:border-red-500 hover:bg-white/5 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-xl">
                {f.icon}
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-wide text-center">{f.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
