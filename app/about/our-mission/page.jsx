import AboutSidebar from "@/components/AboutSidebar";
import siteData from "@/lib/data";

export const metadata = {
  title: "Our Mission | SS4 Security Management",
  description: "SS4 Security Management mission to provide highest quality security services.",
};

export default function OurMissionPage() {
  const { mission } = siteData.about;
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-black uppercase red-line mb-6">Our Mission</h1>
          <div className="img-zoom rounded-lg overflow-hidden mb-6 anim">
            <img
              src={mission.imageUrl}
              alt="Our Mission"
              className="w-full object-cover"
              style={{ maxHeight: 300 }}
              loading="lazy"
            />
          </div>
          <div className="w-7 h-0.5 bg-red-600 mb-4" />
          <p className="text-gray-600 text-lg leading-relaxed mb-6 anim">{mission.description}</p>
          <ul className="space-y-3 anim">
            {mission.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
