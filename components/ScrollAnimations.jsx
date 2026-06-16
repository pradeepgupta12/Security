"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all current .anim elements
    const observe = () => {
      document.querySelectorAll(".anim:not(.show)").forEach((el) => obs.observe(el));
    };

    observe();

    // Also watch for new .anim elements added to DOM (Next.js page transitions)
    const mutObs = new MutationObserver(observe);
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mutObs.disconnect();
    };
  }, [pathname]); // re-run on every route change

  return null;
}
