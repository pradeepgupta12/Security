import ServicesSidebar from "@/components/layout/ServicesSidebar";
import Link from "next/link";
import siteData from "@/lib/data";
import Image from "next/image";

export default function ServiceDetailPage({ slug }) {
  const service = siteData.services.find((s) => s.slug === slug);
  if (!service) return <div className="max-w-7xl mx-auto px-4 py-20 text-center"><h2 className="text-xl font-black">Service not found</h2></div>;

  const others = siteData.services.filter((s) => s.slug !== slug).slice(0, 3);

  // Client data with images from public folder
  const clientCategories = [
    {
      id: 1,
      title: "Banking & Finance",
      image: "/images/clients/Client1.png",
      alt: "Banking & Finance",
    },
    {
      id: 2,
      title: " Manufacturing (Plant & Factory)",
      image: "/images/clients/Client2.png",
      alt: " Manufacturing (Plant & Factory)",
    },
    {
      id: 3,
      title: " Educational Institute",
      image: "/images/clients/Client3.png",
      alt: "Educational Institute ",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <ServicesSidebar />
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-black uppercase red-line mb-6">{service.title}</h1>

          <div className="img-zoom rounded-lg overflow-hidden mb-6 anim">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full object-cover"
              style={{ maxHeight: 380 }}
              loading="lazy"
            />
          </div>

          <div className="w-7 h-0.5 bg-red-600 mb-4" />
          <p className="text-gray-600 text-lg leading-relaxed mb-8 anim">{service.description}</p>

          {/* Our Valued Clients Section */}
          <div className="mb-8 anim">
            <h2 className="text-lg font-black uppercase text-center mb-6">Our Valued Clients</h2>
            <div className="space-y-6">
              {clientCategories.map((client) => (
                <div key={client.id}>
                  {/* Heading image ke upar nahi, pehle */}
                  <h3 className="text-md font-bold text-gray-800 mb-2">
                    {client.title}
                  </h3>
                  {/* Image with full visibility */}
                  <div className="relative w-full   overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}> {/* 16:9 aspect ratio */}
                      <Image
                        src={client.image}
                        alt={client.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other services */}
          <div className="anim">
            <h2 className="text-lg font-black uppercase red-line mb-5">Other Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {others.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="group img-zoom rounded-lg overflow-hidden border border-gray-200 hover:border-red-400 transition-colors block">
                  <img src={s.imageUrl} alt={s.title} className="w-full h-32 object-cover" loading="lazy" />
                  <div className="p-3">
                    <p className="text-xs font-black uppercase group-hover:text-red-600 transition-colors">{s.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
