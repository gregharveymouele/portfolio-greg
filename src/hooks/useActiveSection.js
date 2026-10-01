import { useEffect, useState } from "react";

const DEFAULT_IDS = ["about", "skills", "projects", "journey", "exploring", "certifications", "contact"];

// Watches a thin horizontal band near the vertical center of the viewport and
// reports which section id currently crosses it. Used to highlight the
// matching link in the navigation as the visitor scrolls.
export default function useActiveSection(ids = DEFAULT_IDS) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
