import { images } from "@/constants/images";
import { Expertise } from "@/enum/Expertise";

export const news: {
  title: string;
  desc: string;
  img: string;
  domain: string;
}[] = [
  {
    domain: Expertise.JURIDIQUE,
    title: "Protection de brevets pour une startup tech",
    desc: "SYEL ADVISORY sécurise l’innovation d’une jeune entreprise du numérique.",
    img: images.news.NEWL1,
  },
  {
    domain: Expertise.JURIDIQUE,
    title: "Audit juridique d’une fusion agroalimentaire",
    desc: "Accompagnement dans l’analyse des risques juridiques avant rachat.",
    img: images.news.NEWL2,
  },
  {
    domain: Expertise.FINANCE,
    title: " Contrôle de gestion pour une PME",
    desc: "Mise en place d’outils pour piloter la performance financière.",
    img: images.news.NEWF1,
  },
  {
    domain: Expertise.FINANCE,
    title: "Conseil pour une levée de fonds",
    desc: "Soutien à la préparation financière d’une entreprise en croissance.",
    img: images.news.NEWF2,
  },
  {
    domain: Expertise.SUPPLYCHAIN,
    title: "Réorganisation d’un entrepôt régional",
    desc: "Optimisation des flux logistiques pour un meilleur rendement.",
    img: images.news.NEWS1,
  },
  {
    domain: Expertise.SUPPLYCHAIN,
    title: "Stratégie achats pour une coopérative agricole",
    desc: "Définition d’un plan d’approvisionnement local et durable.",
    img: images.news.NEWS2,
  },
];
