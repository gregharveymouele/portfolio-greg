import cert1 from "../assets/certifications/cert-1.jpg";
import cert2 from "../assets/certifications/cert-2.jpg";
import cert3 from "../assets/certifications/cert-3.jpg";

// Chaque certification affiche une vignette dans la grille (3 par ligne) ;
// cliquer dessus l'ouvre en grand via le composant Lightbox.
export const certifications = [
  {
    slug: "Windows-10-Maîtriser-ce-nouvel-OS",
    title: "Windows 10 : Maîtriser ce nouvel OS",
    issuer: "alphorm",
    date: "2024",
    image: cert1,
  },
  {
    slug: "certification-webmastering",
    title: "webmastering",
    issuer: "MTN Skills Academy",
    date: "2025",
    image: cert2,
  },
  {
    slug: "certification-3",
    title: "Nom de la certification",
    issuer: "Organisme émetteur",
    date: "2024",
    image: cert3,
  },
];
