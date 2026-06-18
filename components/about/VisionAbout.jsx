import AboutSidebar from "@/components/layout/AboutSidebar";
import siteData from "@/lib/data";

export default function VisionAbout() {
  const { vision } = siteData.about;

  // Dynamic parser jo description string se sab kuch nikal lega
  const parseVisionDescription = (text) => {
    const sections = [];

    // Pan India Presence extract
    if (text.includes('Pan India Presence')) {
      sections.push({ type: 'heading', content: 'Pan India Presence' });
      let remaining = text.split('Pan India Presence')[1];
      let match = remaining.match(/^([^JSS]+)/);
      if (match) {
        sections.push({ type: 'text', content: match[1].trim() });
      }
    }

    // JSS Assurance extract with bullet points
    if (text.includes('JSSAssurance')) {
      sections.push({ type: 'heading', content: 'JSS Assurance' });
      let afterJSS = text.split('JSSAssurance')[1];
      let beforeTraining = afterJSS.split('Training')[0];

      // Split by • to get bullet points
      let bullets = beforeTraining.split('•').filter(b => b.trim());
      bullets.forEach(bullet => {
        if (bullet.trim()) {
          sections.push({ type: 'bullet', content: bullet.trim() });
        }
      });
    }

    // Training section
    if (text.includes('Training')) {
      sections.push({ type: 'heading', content: 'Training' });
      let afterTraining = text.split('Training')[1];
      let beforeCustomer = afterTraining.split('Customer Focused')[0];
      // Remove • if present
      let trainingText = beforeCustomer.replace('•', '').trim();
      if (trainingText) {
        sections.push({ type: 'text', content: trainingText });
      }
    }

    // Customer Focused section
    if (text.includes('Customer Focused')) {
      sections.push({ type: 'heading', content: 'Customer Focused' });
      let afterCustomer = text.split('Customer Focused')[1];
      // Fix spelling: witch -> which
      let customerText = afterCustomer.trim().replace('witch', 'which');
      sections.push({ type: 'text', content: customerText });
    }

    return sections;
  };

  const parsedSections = parseVisionDescription(vision.description);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-black uppercase red-line mb-6">Our Vision</h1>

          <div className="img-zoom rounded-lg overflow-hidden mb-6 anim">
            <img
              src={vision.imageUrl}
              alt="Our Vision"
              className="w-full object-cover"
              style={{ maxHeight: 340 }}
              loading="lazy"
            />
          </div>

          <div className="w-7 h-0.5 bg-red-600 mb-4" />

          <div className="space-y-5 anim">
            {parsedSections.map((item, idx) => {
              if (item.type === 'heading') {
                return (
                  <h3 key={idx} className="font-bold text-lg text-gray-800 mt-2 first:mt-0">
                    {item.content}
                  </h3>
                );
              }
              if (item.type === 'bullet') {
                return (
                  <div key={idx} className="flex items-start gap-2 ml-2">
                    <span className="text-red-600 font-bold text-lg leading-5">•</span>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.content}</span>
                  </div>
                );
              }
              if (item.type === 'text') {
                return (
                  <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                    {item.content}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <blockquote className="border-l-4 border-red-600 pl-6 py-4 bg-red-50 rounded-r-lg anim mt-8">
            <p className="text-gray-900 font-black text-sm leading-relaxed uppercase">
              &ldquo;{vision.quote}&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
