import AboutSidebar from "@/components/layout/AboutSidebar";
import siteData from "@/lib/data";

export default function ProfileAbout() {
  const { profile } = siteData.about;
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-black uppercase red-line mb-6">Our Profile</h1>

          {/* YouTube embed */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900 mb-6 anim">
            <iframe
              src={`https://www.youtube.com/embed/${profile.videoId}`}
              title="LFM Security Profile Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="w-7 h-0.5 bg-red-600 mb-4" />
          <p className="text-gray-600 text-lg leading-relaxed mb-8 anim">{profile.description}</p>

          <h2 className="text-lg font-black uppercase red-line mb-4 anim">Supporting Companion In Security</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 anim">
            With a strong management team, experienced and dedicated workforce combined with the utilization of the
            latest security techniques we can become an ideal partner in securing you from the latest security threats.
            We and our employees make uppermost care in your satisfaction and security.
          </p>

          <h2 className="text-lg font-black uppercase red-line mb-4 anim">Our Training</h2>
          <div className="img-zoom rounded-lg overflow-hidden mb-4 anim">
            <img
              src={profile.trainingImageUrl}
              alt="Security Training"
              className="w-full object-cover"
              style={{ maxHeight: 320 }}
              loading="lazy"
            />
          </div>
          <p className="text-gray-600 text-lg leading-relaxed anim">{profile.trainingDesc}</p>
        </div>
      </div>
    </div>
  );
}
