import type { ActivityType } from "@/types/acticity";

const activities: ActivityType[] = [
  {
    icon: "hugeicons:renewable-energy",
    text: "Energie",
  },
  {
    icon: "emojione-monotone:sports-medal",
    text: "Sport",
  },
  {
    icon: "emojione-monotone:oncoming-automobile",
    text: "Automobile",
  },
  {
    icon: "la:landmark",
    text: "Foncier",
  },
  {
    icon: "solar:tv-broken",
    text: "Télécoms",
  },
  {
    icon: "healthicons:factory-worker-outline",
    text: "Métallurgie",
  },
  {
    icon: "clarity:building-line",
    text: "Insfrastructure",
  },
  {
    icon: "mdi:leaf",
    text: "Environnement",
  },
  {
    icon: "ic:outline-fastfood",
    text: "Agroalimentaire",
  },
  {
    icon: "hugeicons:baby-boy-dress",
    text: "Habillement",
  },
  {
    icon: "solar:cosmetic-broken",
    text: "Cosmétique",
  },
  {
    icon: "material-symbols:workspace-premium-outline",
    text: "Art & Culture",
  },
];

const enterpriseValue: { title: string; desc: string }[] = [
  {
    title: "Transparence & Confidentialité",
    desc: "Nous cultivons une relation de confiance avec nos clients en garantissant une communication claire et un suivi en temps réel. La transparence est au cœur de chaque mission.",
  },
  {
    title: "Création de valeur pour le client",
    desc: "Le client est notre priorité. Notre réactivité et notre engagement visent à renforcer sa performance et à lui offrir des solutions concrètes et durables.",
  },
  {
    title: "Intégrité & Éthique",
    desc: "Chez SYEL, l’intégrité de nos équipes est un pilier essentiel. Chaque collaborateur adhère à une culture d’éthique forte, reflet de notre engagement envers nos clients.",
  },
  {
    title: "Excellence opérationnelle",
    desc: "L’excellence, pour nous, c’est le travail bien fait, dans les délais. Nous investissons dans la formation continue et le partage de bonnes pratiques pour toujours viser plus haut.",
  },
];

export { activities, enterpriseValue };
