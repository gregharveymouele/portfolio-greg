import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "../../data/site";
import LivingBackground from "../ui/LivingBackground";
import portrait from "../../assets/portrait.png";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[var(--surface)] pt-24">
      <LivingBackground />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.2fr_0.8fr]">
        {/* Colonne gauche : texte */}
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-grotesk text-sm text-sage"
          >
            Étudiant en informatique
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-instrument text-6xl italic leading-[1.05] text-[var(--heading)] sm:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="max-w-xl font-grotesk text-lg text-[var(--text-soft)] sm:text-xl"
          >
            {site.heroIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#journey"
              className="rounded-full bg-forest px-6 py-3 font-grotesk text-sm text-cream transition-transform hover:scale-[1.03] hover:bg-forest/90"
            >
              Découvrir mon parcours
            </a>
            <a
              href="#projects"
              className="rounded-full border border-[var(--border)] px-6 py-3 font-grotesk text-sm text-[var(--heading)] transition-colors hover:border-gold hover:text-sage"
            >
              Voir mes projets
            </a>
          </motion.div>
        </div>

        {/* Colonne droite : portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          {/* Halo doré discret derrière la photo */}
          <div
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-2xl"
            style={{ background: "radial-gradient(circle, var(--color-sun) 0%, transparent 70%)" }}
          />
          <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-sage/10">
            <img
              src={portrait}
              alt="Portrait de Greg Harvey"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Défiler vers la section suivante"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { delay: 1.4, duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
