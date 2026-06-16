// "use client";
// import { useState } from "react";
// import siteData from "@/lib/data";

// export default function ContactPage() {
//   const { company } = siteData;
//   const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [sent, setSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSent(true);
//     setTimeout(() => setSent(false), 5000);
//     setForm({ name: "", email: "", phone: "", service: "", message: "" });
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <div className="mb-8 anim">
//         <h1 className="text-2xl font-black uppercase red-line mb-2">Contact Us</h1>
//         <p className="text-gray-500 text-sm">Get in touch with us for any security requirement or enquiry.</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Info */}
//         <div className="space-y-6 anim">
//           <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
//             <h2 className="font-black text-sm uppercase tracking-wide mb-4 red-line">Registered Address</h2>
//             <p className="text-gray-600 text-sm leading-relaxed flex gap-2">
//               <span className="text-red-600 mt-0.5 flex-shrink-0">📍</span>
//               {company.registeredAddress}
//             </p>
//           </div>
//           <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
//             <h2 className="font-black text-sm uppercase tracking-wide mb-4 red-line">Corporate Address</h2>
//             <p className="text-gray-600 text-sm leading-relaxed flex gap-2">
//               <span className="text-red-600 mt-0.5 flex-shrink-0">📍</span>
//               {company.corporateAddress}
//             </p>
//           </div>
//           <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
//             <h2 className="font-black text-sm uppercase tracking-wide mb-3 red-line">Get In Touch</h2>
//             {company.phone.map((p, i) => (
//               <p key={i} className="flex gap-2 text-sm text-gray-600">
//                 <span className="text-red-600">📞</span>
//                 <a href={`tel:${p.replace(/\D/g, "")}`} className="hover:text-red-600 transition-colors">{p}</a>
//               </p>
//             ))}
//             <p className="flex gap-2 text-sm text-gray-600">
//               <span className="text-red-600">✉️</span>
//               <a href={`mailto:${company.email}`} className="hover:text-red-600 transition-colors">{company.email}</a>
//             </p>
//             <p className="flex gap-2 text-sm text-gray-600">
//               <span className="text-red-600">🕐</span>
//               {company.hours}
//             </p>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="anim">
//           {sent && (
//             <div className="mb-4 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-700 text-sm font-bold">
//               ✅ Thank you! We will contact you shortly.
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
//             <h2 className="font-black text-sm uppercase tracking-wide mb-2">Send us a Message</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Name *</label>
//                 <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors"
//                   placeholder="Your full name" />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Phone *</label>
//                 <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
//                   className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors"
//                   placeholder="Your phone number" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Email</label>
//               <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors"
//                 placeholder="your@email.com" />
//             </div>
//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Service Required</label>
//               <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white">
//                 <option value="">Select a service</option>
//                 {siteData.services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
//               </select>
//             </div>
//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Message *</label>
//               <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
//                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
//                 placeholder="Tell us about your security requirements..." />
//             </div>
//             <button type="submit"
//               className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 text-sm uppercase tracking-widest transition-colors rounded">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import siteData from "@/lib/data";

export default function ContactPage() {
  const { company } = siteData;
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  // Zone data from company.regionalOffices
  const zones = [
    { key: "mumbai", title: "West Zone", office: company.regionalOffices?.mumbai },
    { key: "hyderabad", title: "South Zone", office: company.regionalOffices?.hyderabad },
    { key: "lucknow", title: "North Zone", office: company.regionalOffices?.lucknow },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8 anim">
        <h1 className="text-2xl font-black uppercase red-line mb-2">Contact Us</h1>
        <p className="text-gray-500 text-sm">Get in touch with us for any security requirement or enquiry.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - Zone Cards + Get In Touch */}
        <div className="space-y-6 anim">
          {/* West Zone Card */}
          {zones[0].office && (
            <div className="bg-white border-l-4 border-red-600 border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-black text-lg uppercase text-red-700 mb-3">{zones[0].title}</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">🏢</span>
                  <span className="leading-relaxed">{zones[0].office.address}</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📞</span>
                  <a href={`tel:${zones[0].office.phone.replace(/\D/g, "")}`} className="hover:text-red-600 transition-colors">
                    {zones[0].office.phone}
                  </a>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📱 Sales</span>
                  <span>{zones[0].office.sales}</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">✉️</span>
                  <a href={`mailto:${zones[0].office.email}`} className="hover:text-red-600 transition-colors break-all">
                    {zones[0].office.email}
                  </a>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📍 Branches</span>
                  <span className="flex-1">{zones[0].office.branches}</span>
                </p>
              </div>
            </div>
          )}

          {/* South Zone Card */}
          {zones[1].office && (
            <div className="bg-white border-l-4 border-red-600 border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-black text-lg uppercase text-red-700 mb-3">{zones[1].title}</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">🏢</span>
                  <span className="leading-relaxed">{zones[1].office.address}</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📞</span>
                  <a href={`tel:${zones[1].office.phone.replace(/\D/g, "")}`} className="hover:text-red-600 transition-colors">
                    {zones[1].office.phone}
                  </a>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📱 Sales</span>
                  <span>{zones[1].office.sales}</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">✉️</span>
                  <a href={`mailto:${zones[1].office.email}`} className="hover:text-red-600 transition-colors break-all">
                    {zones[1].office.email}
                  </a>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📍 Branches</span>
                  <span className="flex-1">{zones[1].office.branches}</span>
                </p>
              </div>
            </div>
          )}

          {/* North Zone Card */}
          {zones[2].office && (
            <div className="bg-white border-l-4 border-red-600 border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-black text-lg uppercase text-red-700 mb-3">{zones[2].title}</h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">🏢</span>
                  <span className="leading-relaxed">{zones[2].office.address}</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📞</span>
                  <a href={`tel:${zones[2].office.phone.replace(/\D/g, "")}`} className="hover:text-red-600 transition-colors">
                    {zones[2].office.phone}
                  </a>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📱 Sales</span>
                  <span>{zones[2].office.sales}</span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">✉️</span>
                  <a href={`mailto:${zones[2].office.email}`} className="hover:text-red-600 transition-colors break-all">
                    {zones[2].office.email}
                  </a>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-600 font-bold">📍 Branches</span>
                  <span className="flex-1">{zones[2].office.branches}</span>
                </p>
              </div>
            </div>
          )}

          {/* Get In Touch Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
            <h2 className="font-black text-sm uppercase tracking-wide mb-3 red-line">Get In Touch</h2>
            {company.phone.map((p, i) => (
              <p key={i} className="flex gap-2 text-sm text-gray-600">
                <span className="text-red-600">📞</span>
                <a href={`tel:${p.replace(/\D/g, "")}`} className="hover:text-red-600 transition-colors">{p}</a>
              </p>
            ))}
            {company.mobileSales && company.mobileSales.map((m, i) => (
              <p key={`sales-${i}`} className="flex gap-2 text-sm text-gray-600">
                <span className="text-red-600">📱 Sales</span>
                <span>{m}</span>
              </p>
            ))}
            <p className="flex gap-2 text-sm text-gray-600">
              <span className="text-red-600">✉️</span>
              <a href={`mailto:${company.email}`} className="hover:text-red-600 transition-colors">{company.email}</a>
            </p>
            <p className="flex gap-2 text-sm text-gray-600">
              <span className="text-red-600">🕐</span>
              {company.hours}
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="anim">
          {sent && (
            <div className="mb-4 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-700 text-sm font-bold">
              ✅ Thank you! We will contact you shortly.
            </div>
          )}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 shadow-sm">
            <h2 className="font-black text-sm uppercase tracking-wide mb-2">Send us a Message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Name *</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Phone *</label>
                <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Your phone number" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Email</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors"
                placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Service Required</label>
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white">
                <option value="">Select a service</option>
                {siteData.services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1">Message *</label>
              <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                placeholder="Tell us about your security requirements..." />
            </div>
            <button type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 text-sm uppercase tracking-widest transition-colors rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}