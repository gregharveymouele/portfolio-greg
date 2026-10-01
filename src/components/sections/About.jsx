import RevealOnScroll from "../ui/RevealOnScroll";
import { about } from "../../data/about";

export default function About() {
  return (
    <section id="about" className="bg-[var(--surface)] px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <RevealOnScroll>
          <h2 className="font-instrument text-4xl italic text-[var(--heading)] sm:text-5xl">
            Qui est Greg, derrière les technologies
          </h2>
        </RevealOnScroll>

        <div className="flex flex-col gap-6">
          {about.paragraphs.map((p, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <p className="max-w-xl font-grotesk text-lg leading-relaxed text-[var(--text-soft)]">{p}</p>
            </RevealOnScroll>
          ))}
          <RevealOnScroll delay={0.24}>
            <p className="max-w-xl font-grotesk text-lg leading-relaxed text-sage">{about.longTerm}</p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
