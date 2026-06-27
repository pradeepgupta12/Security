// "use client";
// import { useState } from "react";
// import siteData from "@/lib/data";

// export default function VideosPage() {
//   const [active, setActive] = useState(null);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="mb-8 anim">
//         <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Media</p>
//         <h1 className="text-2xl font-black uppercase red-line">Our Videos</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {siteData.videos.map((v, i) => (
//           <div
//             key={v.id}
//             className="anim bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
//             style={{ transitionDelay: `${i * 80}ms` }}
//           >
//             {active === v.id ? (
//               <div className="aspect-video bg-black">
//                 <iframe
//                   src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1`}
//                   title={v.title}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full"
//                 />
//               </div>
//             ) : (
//               <div
//                 className="relative aspect-video bg-gray-900 cursor-pointer img-zoom"
//                 onClick={() => setActive(v.id)}
//               >
//                 <img
//                   src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
//                   alt={v.title}
//                   className="w-full h-full object-cover opacity-80"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
//                   <span className="text-[10px] text-red-400 font-bold uppercase tracking-wide">Watch on YouTube</span>
//                 </div>
//               </div>
//             )}
//             <div className="p-4">
//               <p className="text-xs font-black uppercase tracking-wide text-gray-800">{v.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useRef, useEffect } from "react";

const LOCAL_VIDEOS = [
  { id: 1, src: "/videos/video1.mp4" },
  { id: 2, src: "/videos/video2.mp4" },
  { id: 3, src: "/videos/video3.mp4" },
];

function VideoCard({ src, index, isActive, onPlay }) {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);

  /* Jab koi aur video active ho — is card ko pause + reset karo */
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  const handlePlay = () => {
    setLoading(true);
    onPlay(); /* parent ko batao — ye wali active ho gayi */
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 80);
  };

  return (
    <div
      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 anim"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative w-full aspect-video">

        {/* Video — sirf tab render karo jab active ho, warna play button dikhao */}
        {isActive ? (
          <video
            ref={videoRef}
            src={src}
            preload="auto"
            playsInline
            controls
            autoPlay
            onCanPlay={() => setLoading(false)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          /* Play button overlay — koi background nahi, transparent */
          <button
            onClick={handlePlay}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center group bg-transparent"
          >
            {/* Video preview (first frame via video tag — no black flash) */}
            <video
              src={src}
              preload="metadata"
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark tint on hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200" />

            {/* Spinner ya play button */}
            {loading ? (
              <div className="relative z-10 w-10 h-10 border-4 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <div className="relative z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-500 transition-all duration-200">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </button>
        )}

      </div>
    </div>
  );
}

export default function VideosPage() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 anim">
        <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">Media</p>
        <h1 className="text-2xl font-black uppercase red-line">Our Videos</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOCAL_VIDEOS.map((v, i) => (
          <VideoCard
            key={v.id}
            src={v.src}
            index={i}
            isActive={activeId === v.id}
            onPlay={() => setActiveId(v.id)}
          />
        ))}
      </div>
    </div>
  );
}