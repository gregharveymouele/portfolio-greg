import RevealOnScroll from "../ui/RevealOnScroll";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-forest px-6 py-28 text-cream">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="max-w-lg font-instrument text-4xl italic sm:text-5xl">
            Des capacités, pas une collection de logos
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-cream/15 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((skill, i) => (
            <RevealOnScroll key={skill.name} delay={i * 0.05} className="bg-forest p-8">
              <h3 className="font-grotesk text-xl font-medium">{skill.name}</h3>
              <p className="mt-3 font-grotesk text-sm leading-relaxed text-cream/70">{skill.description}</p>
              <p className="mt-5 font-grotesk text-sm text-gold">{skill.level}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
