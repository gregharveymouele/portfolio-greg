import cepeAttestation from "../assets/journey/cepe-attestation.jpg";
import cepeDiplome from "../assets/journey/cepe-diplome.jpg";
import bepcAttestation from "../assets/journey/bepc-attestation.jpg";
import bepcDiplome from "../assets/journey/bepc-diplome.jpg";
import bacAttestation from "../assets/journey/bac-attestation.jpg";
import bacDiplome from "../assets/journey/bac-diplome.jpg";
import licenceAttestation from "../assets/journey/licence-attestation.jpg";
import licenceDiplome from "../assets/journey/licence-diplome.jpg";

// Chaque étape peut afficher des documents consultables en grand (attestation,
// diplôme). "date" est à compléter avec l'année réelle d'obtention.
export const journey = [
  {
    step: "CEPE",
    label: "Certificat d'Études Primaires Élémentaires",
    date: "Date à compléter",
    documents: [
      { label: "Attestation", image: cepeAttestation },
      { label: "Diplôme", image: cepeDiplome },
    ],
  },
  {
    step: "BEPC",
    label: "Brevet d'Études du Premier Cycle",
    date: "Date à compléter",
    documents: [
      { label: "Attestation", image: bepcAttestation },
      { label: "Diplôme", image: bepcDiplome },
    ],
  },
  {
    step: "BAC",
    label: "Baccalauréat",
    date: "Date à compléter",
    documents: [
      { label: "Attestation", image: bacAttestation },
      { label: "Diplôme", image: bacDiplome },
    ],
  },
  {
    step: "Licence",
    label: "Licence — Analyse et Programmation",
    date: "Date à compléter",
    documents: [
      { label: "Attestation", image: licenceAttestation },
      { label: "Diplôme", image: licenceDiplome },
    ],
  },
];
