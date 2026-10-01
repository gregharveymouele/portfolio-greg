import RevealOnScroll from "../ui/RevealOnScroll";
import { philosophy } from "../../data/philosophy";

export default function Philosophy() {
  return (
    <section className="bg-[var(--surface)] px-6 py-28">
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2">
        {philosophy.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.06}>
            <h3 className="font-instrument text-3xl italic text-[var(--heading)]">{item.title}</h3>
            <p className="mt-2 max-w-md font-grotesk text-base text-[var(--text-soft)]">{item.text}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
