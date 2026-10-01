import { motion, useReducedMotion } from "framer-motion";

// Two slow organic shapes drifting behind the hero. Deliberately low-contrast
// so it never competes with the content in front of it.
export default function LivingBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-sage) 0%, transparent 70%)", opacity: 0.25 }}
        animate={
          prefersReducedMotion
            ? {}
            : { x: [0, 40, 0], y: [0, 30, 0] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)", opacity: 0.18 }}
        animate={
          prefersReducedMotion
            ? {}
            : { x: [0, -30, 0], y: [0, -20, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
