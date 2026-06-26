import AboutSidebar from "@/components/layout/AboutSidebar";
import siteData from "@/lib/data";

function CertGrid({ title, accent, items }) {
  return (
    <div className="mb-10 anim">
      <h2 className="text-lg font-black mb-2">
        <span className="text-gray-900">{title.split(" ")[0]} </span>
        <span className="text-red-600">{title.split(" ").slice(1).join(" ")}</span>
      </h2>
      <div className="w-7 h-0.5 bg-red-600 mb-5" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="img-zoom bg-gray-50 border border-gray-200 rounded overflow-hidden mb-2 hover:shadow-md transition-shadow">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full object-cover"
                style={{ minHeight: 160 }}
                loading="lazy"
              />
            </div>
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">{item.name}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-400 italic">Documents belong to LFM Security only</p>
    </div>
  );
}

export default function CertificationAbout() {
  const { certifications } = siteData.about;
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-black uppercase red-line mb-8">Our Certification</h1>

          {/* ISO heading */}
          <div className="text-center mb-6 anim">
            <h2 className="text-2xl font-black">
              <span className="text-gray-400">— </span>
              <span className="text-gray-900">ISO </span>
              <span className="text-red-600">Certificates</span>
              <span className="text-gray-400"> —</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 anim">
            {certifications.iso.map((cert, i) => (
              <div key={i} className="text-center">
                <div className="img-zoom bg-gray-50 border border-gray-200 rounded overflow-hidden mb-2 hover:shadow-md transition-shadow">
                  <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className="w-full object-cover"
                    style={{ minHeight: 190 }}
                    loading="lazy"
                  />
                </div>
                <p className="text-xs font-black text-gray-800 uppercase tracking-wide">{cert.name}</p>
              </div>
            ))}
          </div>

          <CertGrid title="Company Documents" items={certifications.documents} />
          <CertGrid title="Pasara Licenses" items={certifications.pasara} />
        </div>
      </div>
    </div>
  );
}
