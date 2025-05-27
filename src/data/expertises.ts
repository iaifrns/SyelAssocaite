import { images } from "@/constants/images";
import { Expertise } from "@/enum/Expertise";
import type { DetailExpertise, ExpertiseType } from "@/types/expertise";

const expertises: ExpertiseType[] = [
  {
    icon: "octicon:law-16",
    title: Expertise.JURIDIQUE,
    desc: "Nous accompagnons nos clients en conseil juridique et stratégie de propriété intellectuelle, incluant l’audit, la protection des inventions et l’évaluation des DPI.",
    link: `/expertise/${Expertise.JURIDIQUE}`,
  },
  {
    icon: "carbon:finance",
    title: Expertise.FINANCE,
    desc: "Nous accompagnons les entreprises en finance d’entreprise, à travers le contrôle de gestion, l’audit interne et le conseil stratégique.",
    link: `/expertise/${Expertise.FINANCE}`,
  },
  {
    icon: "carbon:scis-transparent-supply",
    title: Expertise.SUPPLYCHAIN,
    desc: "Nous optimisons la chaîne d’approvisionnement, de la stratégie d’achat à la gestion d’entrepôt, en passant par la production et la performance économique.",
    link: `/expertise/${Expertise.SUPPLYCHAIN}`,
  },
];

const detailExpertise: Record<string, DetailExpertise> = {
  [Expertise.JURIDIQUE]: {
    title: Expertise.JURIDIQUE,
    sub: "Protéger, sécuriser et valoriser",
    desc: "Chez SYEL ADVISORY, nous considérons le droit comme un outil stratégique au service de votre développement. Nous intervenons à toutes les étapes de la vie de votre entreprise pour vous apporter des conseils juridiques de haute qualité, notamment en :",
    descList: [
      {
        title: "Audit juridique et Due Diligence :",
        desc: "Nous analysons en profondeur vos contrats, statuts, litiges potentiels ou passifs juridiques avant une levée de fonds, une acquisition ou une fusion.",
      },
      {
        title: "Protection des inventions :",
        desc: "Grâce à notre expertise en propriété intellectuelle, nous accompagnons les inventeurs, entrepreneurs et entreprises à protéger leurs brevets, marques, dessins, logiciels et créations.",
      },
      {
        title: "Opinions légales ciblées :",
        desc: "Nous vous aidons à prendre des décisions éclairées face à des enjeux juridiques complexes, en vous fournissant des avis rédigés et argumentés.",
      },
      {
        title: "Stratégie de propriété intellectuelle :",
        desc: "Au-delà de la protection, nous vous aidons à bâtir une stratégie de valorisation de vos actifs immatériels pour en faire des outils de croissance.",
      },
      {
        title: "Évaluation de DPI (Droits de Propriété Intellectuelle) :",
        desc: "Nous mettons en place des méthodes rigoureuses pour valoriser vos brevets, marques ou licences dans le cadre de transactions, cessions ou levées de fonds.",
      },
    ],
    text: "Notre approche est pragmatique, personnalisée, et toujours orientée vers l’impact économique.",
    img: images.lawImg.LAW2,
  },
  [Expertise.FINANCE]: {
    title: Expertise.FINANCE,
    sub: "Piloter avec clarté et anticiper l’avenir",
    desc: "Nous accompagnons les entreprises dans la structuration et l’optimisation de leur performance financière à travers deux volets majeurs :",
    descList: [
      {
        title: "Contrôle de gestion :",
        desc: "Nous mettons en place des outils de suivi budgétaire, d’analyse de coûts et d’indicateurs de performance pour vous aider à prendre les bonnes décisions, au bon moment.",
      },
      {
        title: "Audit financier & conseil :",
        desc: "Nos missions vont de l’audit ponctuel à l’accompagnement global sur votre stratégie financière. Nous analysons la santé financière de votre entreprise, identifions les leviers d’amélioration, et structurons vos process.",
      },
    ],
    text: "Que vous soyez une startup à la recherche de financement, une PME en pleine croissance ou une structure en mutation, nous vous aidons à sécuriser vos finances et à renforcer votre crédibilité auprès des investisseurs et partenaires.",
    img: images.finance.FINANCE1,
  },
  [Expertise.SUPPLYCHAIN]: {
    title: Expertise.SUPPLYCHAIN,
    sub: "Rendre votre logistique plus agile et compétitive",
    desc: "Une gestion efficace de la chaîne d’approvisionnement est un facteur clé de rentabilité. C’est pourquoi nous intervenons sur l’ensemble des maillons de la chaîne :",
    descList: [
      {
        title: "Construction et optimisation de la stratégie Supply Chain :",
        desc: "Nous vous aidons à définir une stratégie alignée avec vos objectifs commerciaux et votre modèle opérationnel.",
      },
      {
        title: "Politique d’achat et d’approvisionnement :",
        desc: "Nous structurons vos processus d’approvisionnement, sélection des fournisseurs, négociations, gestion des stocks.",
      },
      {
        title: "Optimisation de la gestion d’entrepôt :",
        desc: "Nos experts repensent vos flux internes pour réduire les délais, limiter les pertes et améliorer la traçabilité.",
      },
      {
        title: "Planification de la production :",
        desc: "Nous mettons en place des modèles de prévision, de planification et de pilotage de la production.",
      },
      {
        title: "Performance économique globale :",
        desc: "Nous définissons avec vous les indicateurs clés pour suivre l'efficacité, la réactivité et la rentabilité de votre supply chain.",
      },
    ],
    text: "Nous vous apportons des solutions concrètes, adaptées à votre secteur, votre taille et votre environnement.",
    img: images.transport.TRANSPORT2,
  },
};



export { expertises, detailExpertise };
