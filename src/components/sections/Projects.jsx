import RevealOnScroll from "../ui/RevealOnScroll";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--surface)] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="max-w-lg font-instrument text-4xl italic text-[var(--heading)] sm:text-5xl">
            La preuve, par le concret
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
