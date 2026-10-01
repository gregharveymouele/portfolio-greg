import RevealOnScroll from "../ui/RevealOnScroll";
import CertificationCard from "../certifications/CertificationCard";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[var(--surface)] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="max-w-lg font-instrument text-4xl italic text-[var(--heading)] sm:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 max-w-md font-grotesk text-base text-[var(--text-soft)]">
            Clique sur une certification pour la voir en grand.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert.slug} delay={i * 0.06}>
              <CertificationCard certification={cert} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
