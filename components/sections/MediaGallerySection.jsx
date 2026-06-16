import Link from "next/link";
import siteData from "@/lib/data";

export default function MediaGallerySection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 anim">
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">In Media</p>
          <h2 className="text-2xl md:text-3xl font-black uppercase red-line mb-2">Our Media Gallery</h2>
          <p className="text-gray-500 text-sm">Read The News Blogs And Tell Us Which One Is Your Favorite?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.mediaGallery.map((item, i) => (
            <a key={item.id} href={item.url}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow anim group"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative img-zoom">
                {item.tag && (
                  <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">
                    {item.tag}
                  </span>
                )}
                <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold text-gray-800 leading-snug mb-4 line-clamp-3">{item.title}</p>
                <div className="bg-red-600 text-white text-xs font-black uppercase tracking-wide text-center py-2">
                  {item.source}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery/in-media"
            className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-3 text-sm uppercase tracking-wide transition-colors">
            View Full Media Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
