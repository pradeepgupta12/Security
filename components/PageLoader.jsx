"use client";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`page-loader ${done ? "done" : ""}`}>
      <div className="loader-ring mb-5" />
      <div className="text-white font-black text-sm tracking-[0.3em]">JSS GROUP</div>
      <div className="text-red-500 text-xs tracking-widest mt-1">SECURITY & FACILITY MANAGEMENT </div>
    </div>
  );
}
