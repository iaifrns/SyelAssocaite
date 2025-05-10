import { images } from "@/constants/images";
import type { CaroselType } from "@/types/carosel";

export const caroselData: CaroselType[] = [
  {
    image: images.lawImg.LAW3,
    title: "Conseil Juridique & Propriété Intellectuelle",
    desc: "Nous conseillons nos clients sur les enjeux juridiques et la valorisation de leurs actifs intellectuels, en les accompagnant dans l’audit, la protection des inventions et l’évaluation de leurs droits.",
  },
  {
    image: images.lawImg.LAW2,
    title: "Pilotage & Conseil en Finance d’Entreprise",
    desc: "Nous accompagnons les entreprises dans la maîtrise de leur performance financière, via le contrôle de gestion, l’audit interne et le conseil stratégique.",
  },
  {
    image: images.transport.TRANSPORT1,
    title: "Stratégie & Performance Supply Chain",
    desc: "Nous optimisons chaque maillon de la chaîne d’approvisionnement, de la politique d’achat à la gestion d’entrepôt, en passant par la planification de la production et la performance économique.",
  },
];
