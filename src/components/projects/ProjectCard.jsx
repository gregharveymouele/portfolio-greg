import { motion } from "framer-motion";
import { ArrowUpRight, GitFork } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-8"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-grotesk text-xs text-sage">{project.category}</span>
          <span className="font-grotesk text-xs text-warmgray">{project.status}</span>
        </div>

        <h3 className="mt-4 font-instrument text-3xl italic text-[var(--heading)]">{project.name}</h3>
        <p className="mt-3 font-grotesk text-base leading-relaxed text-[var(--text-soft)]">{project.pitch}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-sage/30 px-3 py-1 font-grotesk text-xs text-sage">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex gap-5">
        {project.demoUrl && (
          <a href={project.demoUrl} className="flex items-center gap-1 font-grotesk text-sm text-[var(--heading)] hover:text-gold">
            Démo <ArrowUpRight size={14} />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className="flex items-center gap-1 font-grotesk text-sm text-[var(--heading)] hover:text-gold">
            <GitFork size={14} /> Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
