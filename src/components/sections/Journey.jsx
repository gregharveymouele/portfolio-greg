import RevealOnScroll from "../ui/RevealOnScroll";
import { useLightbox } from "../../context/LightboxContext";
import { journey } from "../../data/journey";

export default function Journey() {
  const { open } = useLightbox();

  return (
    <section id="journey" className="bg-[var(--surface)] px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <h2 className="font-instrument text-4xl italic text-[var(--heading)] sm:text-5xl">Parcours</h2>
        </RevealOnScroll>

        <div className="relative mt-16 border-l border-[var(--border)] pl-10">
          {journey.map((item, i) => (
            <RevealOnScroll key={item.step} delay={i * 0.06} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[45px] top-1 h-3 w-3 rounded-full bg-gold" />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-grotesk text-lg font-medium text-[var(--heading)]">{item.step}</h3>
                <span className="font-grotesk text-sm text-sage">{item.date}</span>
              </div>

              <p className="mt-2 max-w-xl font-grotesk text-base leading-relaxed text-[var(--text-soft)]">
                {item.label}
              </p>

              {item.documents?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.documents.map((doc) => (
                    <button
                      key={doc.label}
                      onClick={() => open(doc.image, `${item.step} — ${doc.label}`, item.label)}
                      className="rounded-full border border-[var(--border)] px-4 py-1.5 font-grotesk text-xs text-[var(--heading)] transition-colors hover:border-gold hover:text-sage"
                    >
                      Voir {doc.label.toLowerCase()}
                    </button>
                  ))}
                </div>
              )}
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
