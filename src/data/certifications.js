import cert1 from "../assets/certifications/cert-1.jpg";
import cert2 from "../assets/certifications/cert-2.jpg";
import cert3 from "../assets/certifications/cert-3.jpg";
import certTabac from "../assets/certifications/CERTIFICAT D'APPRÉCIATION 28 jours pour arrêter le tabac.jpg";
import certCompetencesInternet from "../assets/certifications/Comp_tences_Internet_pour_une__Certificate.jpg";
import certEssentielsNumeriques from "../assets/certifications/Essentiels_num_riques___meille_Certificate.jpg";
import certGoogleDrive from "../assets/certifications/Google Drive Coursera 97M2PJ5JT549.jpg";
import certGoogleGmail from "../assets/certifications/Google Gmail Coursera F5DEJXLBL2FS.jpg";
import certCanvaEssentials from "../assets/certifications/greg-harvey-mouele-canva-essentials-certificate.jpg";
import certGraphicDesign from "../assets/certifications/greg-harvey-mouele-graphic-design-essentials-certificate.jpg";
import certMarketingCanva from "../assets/certifications/greg-harvey-mouele-marketing-with-canva-certificate.jpg";
import certInternetFundamentals from "../assets/certifications/Internet_Fundamentals_Certificate_0001.jpg";

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
  {
    slug: "arret-du-tabac-28-jours",
    title: "28 jours pour arrêter le tabac",
    issuer: "Volontaires ONU",
    date: "2026",
    image: certTabac,
  },
  {
    slug: "competences-internet-utilisation-quotidienne",
    title: "Compétences Internet pour une utilisation quotidienne",
    issuer: "MTN Skills Academy",
    date: "2026",
    image: certCompetencesInternet,
  },
  {
    slug: "essentiels-numeriques",
    title: "Essentiels numériques",
    issuer: "MTN Skills Academy",
    date: "2026",
    image: certEssentielsNumeriques,
  },
  {
    slug: "google-drive",
    title: "Google Drive",
    issuer: "Google Cloud / Coursera",
    date: "2026",
    image: certGoogleDrive,
  },
  {
    slug: "gmail",
    title: "Gmail",
    issuer: "Google Cloud / Coursera",
    date: "2026",
    image: certGoogleGmail,
  },
  {
    slug: "canva-essentials",
    title: "Canva Essentials",
    issuer: "Canva Design School",
    date: "2025",
    image: certCanvaEssentials,
  },
  {
    slug: "graphic-design-essentials",
    title: "Graphic Design Essentials",
    issuer: "Canva Design School",
    date: "2025",
    image: certGraphicDesign,
  },
  {
    slug: "marketing-with-canva",
    title: "Marketing with Canva",
    issuer: "Canva Design School",
    date: "2025",
    image: certMarketingCanva,
  },
  {
    slug: "internet-fundamentals",
    title: "Internet Fundamentals",
    issuer: "MTN Skills Academy",
    date: "2026",
    image: certInternetFundamentals,
  },
];
