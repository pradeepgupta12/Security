import Link from "next/link";
import siteData from "@/lib/data";

export default function ServicesSection() {
  const featured = siteData.services.slice(0, 3);
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 anim">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">What We Offer</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase red-line-center mb-3">Our Services</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            JSS Group Security & Facility Management Pvt Ltd — India-based, operating all over India.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow anim"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="img-zoom aspect-[4/3] bg-gray-100">
                <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-black text-sm uppercase tracking-wide group-hover:text-red-600 transition-colors">{s.title}</h3>
                <div className="w-7 h-0.5 bg-red-600 my-2" />
                <p className="text-gray-500 text-xs leading-relaxed">{s.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services/industrial-security"
            className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-3 text-sm uppercase tracking-wide transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
