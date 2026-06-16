import AboutSidebar from "@/components/AboutSidebar";
import siteData from "@/lib/data";

export const metadata = {
  title: "Testimonials | JSS Group Security & Facility Management",
  description: "Client testimonials and feedback for JSS Group Security & Facility Management Pvt. Ltd.",
};

export default function TestimonialsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-black uppercase red-line mb-8">
            Clients&apos; Testimonials and Feedback
          </h1>
          <div className="space-y-8">
            {siteData.testimonials.map((t, i) => (
              <div
                key={i}
                className="anim border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-600 mb-4"
                    loading="lazy"
                  />
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic max-w-2xl">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <h3 className="font-black text-sm uppercase tracking-wide">{t.name}</h3>
                  <p className="text-red-600 text-xs uppercase tracking-widest mt-1">{t.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
