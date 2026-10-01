import RevealOnScroll from "../ui/RevealOnScroll";
import { exploring } from "../../data/exploring";

export default function Exploring() {
  return (
    <section id="exploring" className="bg-[var(--surface-soft)] px-6 py-28">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <RevealOnScroll>
          <h2 className="font-instrument text-4xl italic text-[var(--heading)] sm:text-5xl">J'explore</h2>
          <p className="mt-4 max-w-sm font-grotesk text-base text-[var(--text-soft)]">
            Une personne en progression, pas une personne qui prétend avoir déjà tout maîtrisé.
          </p>
        </RevealOnScroll>

        <ul className="flex flex-col gap-4">
          {exploring.map((item, i) => (
            <RevealOnScroll key={item} delay={i * 0.06}>
              <li className="border-b border-[var(--border)] pb-4 font-grotesk text-lg text-[var(--text)]">{item}</li>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
