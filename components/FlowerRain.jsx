// "use client";
// import { useEffect } from "react";

// const FLOWERS = ["❄", "❅", "❆", "✻", "✼"];

// export default function FlowerRain() {
//   useEffect(() => {
//     const wrap = document.createElement("div");
//     wrap.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;";
//     document.body.appendChild(wrap);

//     const active = [];

//     function spawn() {
//       const el = document.createElement("span");
//       const emoji = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
//       const size = Math.random() * 14 + 10;
//       const left = Math.random() * 100;
//       const fallDur = Math.random() * 9 + 6;
//       const swayDur = Math.random() * 3 + 2;
//       const delay = Math.random() * 4;

//       el.textContent = emoji;
//       el.className = "flower";
//       el.style.cssText = `
//         left:${left}vw;
//         font-size:${size}px;
//         animation-duration:${fallDur}s,${swayDur}s;
//         animation-delay:${delay}s,${delay}s;
//       `;
//       wrap.appendChild(el);
//       active.push(el);

//       setTimeout(() => {
//         el.remove();
//         const i = active.indexOf(el);
//         if (i > -1) active.splice(i, 1);
//       }, (fallDur + delay + 1) * 1000);
//     }

//     for (let i = 0; i < 14; i++) spawn();
//     const interval = setInterval(() => {
//       if (active.length < 22) spawn();
//     }, 700);

//     return () => {
//       clearInterval(interval);
//       active.forEach(e => e.remove());
//       wrap.remove();
//     };
//   }, []);

//   return null;
// }


"use client";
import { useEffect } from "react";

const FLOWERS = ["❄", "❅", "❆", "✻", "✼"];

export default function FlowerRain() {
  useEffect(() => {
    const wrap = document.createElement("div");
    wrap.style.cssText =
      "position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;";
    document.body.appendChild(wrap);

    const active = [];

    function spawn() {
      const el = document.createElement("span");
      const emoji = FLOWERS[Math.floor(Math.random() * FLOWERS.length)];
      const size = Math.random() * 14 + 10;
      const left = Math.random() * 100;
      const fallDur = Math.random() * 9 + 6;
      const swayDur = Math.random() * 3 + 2;
      const delay = Math.random() * 4;

      el.textContent = emoji;
      el.className = "flower";
      el.style.cssText = `
        left:${left}vw;
        font-size:${size}px;
        animation-duration:${fallDur}s,${swayDur}s;
        animation-delay:${delay}s,${delay}s;

        /* Light & dull appearance */
        color: rgba(255,255,255,0.65);
        opacity: 0.6;
        filter: blur(0.3px);
        text-shadow:
          0 0 4px rgba(255,255,255,0.25),
          0 0 8px rgba(255,255,255,0.15);
      `;

      wrap.appendChild(el);
      active.push(el);

      setTimeout(() => {
        el.remove();
        const i = active.indexOf(el);
        if (i > -1) active.splice(i, 1);
      }, (fallDur + delay + 1) * 1000);
    }

    for (let i = 0; i < 14; i++) spawn();

    const interval = setInterval(() => {
      if (active.length < 22) spawn();
    }, 700);

    return () => {
      clearInterval(interval);
      active.forEach((e) => e.remove());
      wrap.remove();
    };
  }, []);

  return null;
}