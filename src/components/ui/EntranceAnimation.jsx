import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// One orchestrated page-load moment. Runs once per session, respects reduced motion,
// and never blocks content — it lays over the already-mounted page and fades away.
export default function EntranceAnimation({ name = "Greg Harvey", tagline }) {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("entrance-shown");
  });

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem("entrance-shown", "1");
    const duration = prefersReducedMotion ? 0 : 1900;
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [visible, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute h-40 w-40 rounded-full"
            style={{ background: "radial-gradient(circle, var(--color-sun) 0%, transparent 70%)" }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="relative flex flex-col items-center gap-4 text-center">
            <motion.h1
              className="font-instrument text-5xl italic text-cream sm:text-7xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {name}
            </motion.h1>
            <motion.div
              className="h-px w-16 bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            />
            {tagline && (
              <motion.p
                className="font-grotesk text-sm text-sage sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15, duration: 0.6 }}
              >
                {tagline}
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
