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

const enterpriseValue: { title: string; desc: string; detailDesc: string }[] = [
  {
    title: "Transparence & Confidentialité",
    desc: "Nous cultivons une relation de confiance avec nos clients en garantissant une communication claire et un suivi en temps réel. La transparence est au cœur de chaque mission.",
    detailDesc:
      "Chez SYEL ADVISORY, la transparence est le socle de nos relations clients. Nous communiquons avec clarté sur l’avancement des missions tout en assurant une stricte confidentialité des données sensibles. Chaque collaboration repose sur la confiance, le respect mutuel et la sécurité des échanges.",
  },
  {
    title: "Création de valeur pour le client",
    desc: "Le client est notre priorité. Notre réactivité et notre engagement visent à renforcer sa performance et à lui offrir des solutions concrètes et durables.",
    detailDesc:
      "Nous plaçons la performance de nos clients au cœur de notre approche. En anticipant leurs besoins et en apportant des solutions sur mesure, nous agissons comme un véritable partenaire stratégique. Notre réactivité et notre expertise contribuent à leur succès durable.",
  },
  {
    title: "Intégrité & Éthique",
    desc: "Chez SYEL, l’intégrité de nos équipes est un pilier essentiel. Chaque collaborateur adhère à une culture d’éthique forte, reflet de notre engagement envers nos clients.",
    detailDesc:
      "L’intégrité est une exigence essentielle partagée par l’ensemble de nos équipes. Fondée sur l’honnêteté, la responsabilité et le respect des règles déontologiques, elle garantit la fiabilité de nos interventions et renforce la crédibilité du cabinet auprès de ses clients.",
  },
  {
    title: "Excellence opérationnelle",
    desc: "L’excellence, pour nous, c’est le travail bien fait, dans les délais. Nous investissons dans la formation continue et le partage de bonnes pratiques pour toujours viser plus haut.",
    detailDesc:
      "L’excellence est au cœur de notre culture. Elle se traduit par un haut niveau d’exigence, le respect des délais et une attention constante aux détails. Grâce à la formation continue et au partage des meilleures pratiques, nous livrons des services de qualité supérieure.",
  },
];

export { activities, enterpriseValue };
