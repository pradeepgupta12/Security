export const metadata = {
  title: "Privacy Policy | LFM Security Management",
  description: "Privacy policy of LFM Security Management Pvt. Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-black uppercase red-line mb-8 anim">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none space-y-6 text-gray-600 text-sm leading-relaxed anim">
        <p>This Privacy Policy describes how LFM Group Security & Facility Management Pvt. Ltd. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information about you when you use our website and services.</p>

        <h2 className="text-base font-black uppercase text-gray-900">Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or apply for a job. This may include your name, email address, phone number, and other contact information.</p>

        <h2 className="text-base font-black uppercase text-gray-900">How We Use Your Information</h2>
        <ul className="list-none space-y-2 pl-0">
          {[
            "To respond to your enquiries and provide customer support",
            "To process job applications and recruitment",
            "To send you information about our services",
            "To improve our website and services",
            "To comply with legal obligations",
          ].map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-red-600 flex-shrink-0">›</span>{item}
            </li>
          ))}
        </ul>

        <h2 className="text-base font-black uppercase text-gray-900">Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>

        <h2 className="text-base font-black uppercase text-gray-900">Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

        <h2 className="text-base font-black uppercase text-gray-900">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at info@LFMsecurity.com or call us at 9800-891-3700.</p>

        <p className="text-gray-400 text-xs">Last updated: January 2024</p>
      </div>
    </div>
  );
}
