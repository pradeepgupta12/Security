import Counter from "@/components/ui/Counter";
import siteData from "@/lib/data";

export const metadata = {
  title: "Our Presence | LFM Group Security & Facility Management",
  description:
    "LFM Group Security & Facility Management Pan India presence with operations across 17+ states.",
};

export default function PresencePage() {
  const { presence } = siteData;

  // States from your screenshot
  const statesList = [
    "MAHARASHTRA", "TELANGANA", "TAMIL NADU", "JHARKHAND",
    "UTTAR PRADESH", "ANDHRA PRADESH", "MADHYA PRADESH",
    "GUJARAT", "RAJASTHAN", "KARNATAKA", "DELHI"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8 anim text-center">
        <h1 className="text-2xl font-black uppercase red-line-center mb-2">
          Our Presence
        </h1>
        <p className="text-red-600 text-xs font-bold uppercase tracking-widest">
          Working Pan India
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side Stats */}
        <div className="anim">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              {presence.stats.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-b-0"
                >
                  <div className="text-3xl font-black text-red-600 w-32 flex-shrink-0">
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>

                  <div className="text-sm font-bold uppercase tracking-wide text-gray-800">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side India Map - Image with flexible sizing */}
        <div className="anim">
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black uppercase tracking-widest text-red-600">
                Working Pan India
              </h2>
            </div>

            {/* Image Container - Tu idhar width/height change kar sakta hai */}
            <div className="flex justify-center">
              <img
                src="/images/Map.png"
                alt="India Presence Map"
                className="object-contain"
                style={{
                  width: '120%',      // Yahan width change kar (e.g., '400px', '500px', '80%')
                  maxWidth: '900px',  // Maximum width limit - ye value badal de
                  height: 'auto',     // Height auto rahega
                  // height: '400px', // Agar fixed height chahiye to ye line uncomment kar
                }}
              />
            </div>

            {/* States List Below Map - Tere screenshot ke hisaab se */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 text-center">
                📍 States with Presence
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {statesList.map((state, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                    {state}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}