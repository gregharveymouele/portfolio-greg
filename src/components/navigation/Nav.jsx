import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import useActiveSection from "../../hooks/useActiveSection";

const LINKS = [
  { href: "#about", id: "about", label: "À propos" },
  { href: "#skills", id: "skills", label: "Compétences" },
  { href: "#projects", id: "projects", label: "Projets" },
  { href: "#journey", id: "journey", label: "Parcours" },
  { href: "#exploring", id: "exploring", label: "J'explore" },
  { href: "#certifications", id: "certifications", label: "Certifications" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled ? "bg-[var(--surface)]/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-grotesk text-lg font-medium text-[var(--heading)]">
          Greg Harvey Mouele
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8">
            {LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href} className="relative pb-2">
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`font-grotesk text-sm transition-colors ${
                      isActive
                        ? "text-[var(--heading)]"
                        : "text-[var(--text-soft)] hover:text-[var(--heading)]"
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-[var(--heading)]"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 bg-[var(--surface)] px-6 pb-6 md:hidden">
          {LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-2 py-2 font-grotesk text-base transition-colors ${
                    isActive ? "text-[var(--heading)]" : "text-[var(--text-soft)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot-mobile"
                      className="h-1.5 w-1.5 rounded-full bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
