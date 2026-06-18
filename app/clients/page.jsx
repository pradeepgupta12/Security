import siteData from "@/lib/data";
import Counter from "@/components/ui/Counter";
import Image from "next/image";

export const metadata = {
  title: "Our Clients | JSS Group Security & Facility Management",
  description: "JSS Group Security & Facility Management reputed clients across India including Tata, Adani, GMR, KEC and more.",
};

export default function ClientsPage() {
  const clientCategories = [
    {
      id: 1,
      title: "Banking & Finance-",
      image: "/images/clients/Client1.png",
      alt: "Banking & Finance",
    },
    {
      id: 2,
      title: "Manufacturing (Plant & Factory)-",
      image: "/images/clients/Client2.png",
      alt: "Manufacturing (Plant & Factory)",
    },
    {
      id: 3,
      title: "Educational Institute-",
      image: "/images/clients/Client3.png",
      alt: "Educational Institute",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-10 anim text-center">
        <h1 className="text-2xl font-black uppercase red-line-center mb-3">Our Reputed Clients</h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Our client list represents itself with no issue. Since our earliest days, we&apos;ve addressed all that from new businesses to Fortune 500 organizations with that equivalent association approach and devotion at the center of each commitment.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
        {siteData.stats.map((s, i) => (
          <div key={i} className="anim bg-red-600 rounded-lg p-5 text-center" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="text-2xl font-black text-white mb-1">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-red-200 text-xs font-semibold uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Our Valued Clients Section - Images with headings */}
      <div className="mb-8 anim">
        <h2 className="text-lg font-black uppercase text-center mb-6">Our Valued Clients</h2>
        <div className="space-y-6">
          {clientCategories.map((client) => (
            <div key={client.id}>
              {/* Heading with larger font size */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {client.title}
              </h3>
              <div className="relative w-full overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
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
    </div>
  );
}