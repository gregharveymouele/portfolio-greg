import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLightbox } from "../../context/LightboxContext";

// Single shared overlay: mounted once in App, opened by any card via useLightbox().
export default function Lightbox() {
  const { item, close } = useLightbox();

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, close]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
        >
          <motion.button
            aria-label="Fermer"
            className="absolute right-6 top-6 text-cream/80 hover:text-gold"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <X size={28} />
          </motion.button>

          <motion.div
            className="flex max-h-full max-w-3xl flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.image}
              alt={item.title || "Document agrandi"}
              className="max-h-[75vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            {(item.title || item.subtitle) && (
              <div className="text-center">
                {item.title && <p className="font-grotesk text-base text-cream">{item.title}</p>}
                {item.subtitle && <p className="font-grotesk text-sm text-cream/60">{item.subtitle}</p>}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
