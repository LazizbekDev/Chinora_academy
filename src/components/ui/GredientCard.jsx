// src/components/GradientCard.jsx
import { useEffect, useRef } from "react";

/**
 * GradientCard
 * Props:
 *  - children: card content
 *  - sectionId: scroll source element id (default: "pricing")
 *  - rgb: base color as "R,G,B" (default for #882F50 -> "136,47,80")
 *  - intensity: 0..1 (default 0.16)
 */
const GradientCard = ({ children, sectionId = "pricing", rgb = "136,47,80", intensity = 0.16 }) => {
  const elRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section || !elRef.current) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // progress: 0 when section bottom below viewport, 1 when section top above viewport top
      // clamp to [0,1]
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));

      // map progress -> center%
      // tweak multipliers to adjust how wide/strong the movement is
      const centerX = 50 + (progress - 0.5) * 60; // roughly 20%..80%
      const centerY = 50 + (progress - 0.5) * 22; // roughly 39%..61%

      // build radial gradient with soft stops (adjust alphas if you want stronger/weaker)
      const g = `radial-gradient(circle at ${centerX}% ${centerY}%, rgba(${rgb}, ${Math.min(0.28, intensity*1.6)}) 0%, rgba(${rgb}, ${Math.min(0.18, intensity*1.1)}) 25%, rgba(${rgb}, ${Math.min(0.08, intensity*0.5)}) 55%, transparent 80%)`;

      // use rAF to avoid layout thrash
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          if (elRef.current) {
            elRef.current.style.backgroundImage = g;
          }
          rafRef.current = null;
        });
      }
    };

    // initial paint
    update();

    // attach listeners
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sectionId, rgb, intensity]);

  // starting background (so it has something before scroll)
  const baseBg = `radial-gradient(circle at 50% 50%, rgba(${rgb}, ${intensity}) 0%, rgba(${rgb}, ${intensity * 0.7}) 25%, rgba(${rgb}, ${intensity * 0.35}) 55%, transparent 80%)`;

  return (
    <div
      ref={elRef}
      className="relative rounded-2xl overflow-hidden transition-shadow duration-300"
      style={{
        // keep transparent base so inner Card bg shows through when needed
        backgroundImage: baseBg,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        willChange: "background-image",
      }}
    >
      {children}
    </div>
  );
};

export default GradientCard;
