import RevealOnScroll from "../ui/RevealOnScroll";
import { site } from "../../data/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-forest px-6 py-28 text-cream">
      <div className="mx-auto max-w-3xl text-center">
        <RevealOnScroll>
          <h2 className="font-instrument text-4xl italic sm:text-6xl">Parlons-en</h2>
          <p className="mt-4 font-grotesk text-lg text-cream/75">
            Une idée, une opportunité, ou simplement envie d'échanger — écrivez-moi.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-grotesk text-sm text-ink transition-transform hover:scale-[1.03]"
          >
            {site.email}
          </a>

          <div className="mt-8 flex justify-center gap-6">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-grotesk text-sm text-cream/70 hover:text-sun"
              >
                {s.label}
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
