import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useLightbox } from "../../context/LightboxContext";

export default function CertificationCard({ certification }) {
  const { open } = useLightbox();

  return (
    <motion.button
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => open(certification.image, certification.title, `${certification.issuer} · ${certification.date}`)}
      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] text-left"
      aria-label={`Agrandir : ${certification.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sage/10">
        <img
          src={certification.image}
          alt={certification.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
          <ZoomIn className="text-cream" size={28} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-grotesk text-base font-medium text-[var(--heading)]">{certification.title}</h3>
        <p className="mt-1 font-grotesk text-sm text-[var(--text-softer)]">
          {certification.issuer} · {certification.date}
        </p>
      </div>
    </motion.button>
  );
}
