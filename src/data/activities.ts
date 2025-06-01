import type { ActivityType } from "@/types/acticity";

const activities: ActivityType[] = [
  {
    icon: "hugeicons:renewable-energy",
    text: "Energie",
    description:
      "SYEL ADVISORY accompagne les acteurs du secteur énergétique – producteurs, investisseurs ou opérateurs – dans la structuration juridique de projets (contrats de concession, partenariats public-privé, fiscalité énergétique), la planification financière (modèles économiques, levée de fonds, subventions), ainsi que l’optimisation des chaînes d’approvisionnement (logistique d’import, stockage, distribution). Notre accompagnement s’étend aussi aux enjeux de transition énergétique et de conformité réglementaire.",
  },
  {
    icon: "emojione-monotone:sports-medal",
    text: "Sport",
    description:
      "Que ce soit pour des fédérations, clubs, athlètes ou organisateurs d’événements, nous intervenons sur la gestion contractuelle (droits d’image, sponsoring, transferts), la gouvernance juridique des structures sportives, le financement de projets (stades, équipements), et la logistique d’événements sportifs. SYEL ADVISORY aide aussi à valoriser les actifs immatériels et à structurer des projets à impact social dans le sport.",
  },
  {
    icon: "emojione-monotone:oncoming-automobile",
    text: "Automobile",
    description:
      "Nous soutenons les concessionnaires, importateurs, garages industriels et équipementiers dans la conformité juridique (douane, homologation, responsabilité produit), la planification financière (rentabilité des stocks, financement des véhicules) et l’optimisation supply chain (gestion des pièces détachées, organisation des ateliers, digitalisation de la logistique). Nous apportons aussi une assistance dans la négociation avec les constructeurs et partenaires.",
  },
  {
    icon: "la:landmark",
    text: "Foncier",
    description:
      "Dans un contexte foncier souvent complexe, nous proposons une sécurisation juridique des transactions (titres de propriété, baux, servitudes), une structuration stratégique des projets immobiliers (montage financier, fiscalité, partenariats), ainsi qu’un accompagnement opérationnel sur la mise en œuvre (relation avec l’administration, coordination des parties prenantes, délais). SYEL ADVISORY intervient aussi sur la valorisation des actifs fonciers et le conseil aux collectivités.",
  },
  {
    icon: "solar:tv-broken",
    text: "Télécoms",
    description:
      "Dans un secteur en perpétuelle évolution, SYEL ADVISORY offre son expertise pour la gestion des licences et autorisations, la rédaction de contrats techniques (hébergement, interconnexion, maintenance), la structuration financière de projets d’infrastructure (réseaux fibre, data centers), et l’optimisation des coûts logistiques liés aux équipements. Nous intervenons aussi sur les problématiques de conformité aux normes internationales.",
  },
  {
    icon: "healthicons:factory-worker-outline",
    text: "Métallurgie",
    description:
      "Notre cabinet conseille les entreprises du secteur métallurgique sur la conformité réglementaire (sécurité industrielle, environnement, droit du travail), la structuration financière (optimisation des coûts de production, rentabilité des investissements) et l’amélioration de la chaîne de production (flux matières, maintenance, stockage). Nous contribuons à renforcer la compétitivité des industriels à travers des stratégies juridiques et opérationnelles robustes.",
  },
  {
    icon: "clarity:building-line",
    text: "Insfrastructure",
    description:
      "SYEL ADVISORY accompagne les porteurs de projets dans le secteur des infrastructures (routes, ponts, bâtiments publics) de l’étude de faisabilité à la livraison : montage juridique (PPP, marchés publics), structuration financière (budgets, business plans, financements institutionnels) et pilotage supply chain (coordination des fournisseurs, maîtrise des délais et coûts). Nous agissons comme bras droit stratégique et opérationnel des promoteurs.",
  },
  {
    icon: "mdi:leaf",
    text: "Environnement",
    description:
      "Nous apportons un soutien juridique pour la mise en conformité environnementale (normes locales et internationales, études d’impact), conseillons sur la structuration des projets verts (recyclage, énergies renouvelables, gestion des déchets), et accompagnons les acteurs de l’économie circulaire sur leur logistique verte (collecte, traitement, distribution). L’objectif : allier performance économique et responsabilité environnementale.",
  },
  {
    icon: "ic:outline-fastfood",
    text: "Agroalimentaire",
    description:
      "Dans ce secteur stratégique, nous intervenons sur la traçabilité des produits, la gestion des normes sanitaires, la rédaction de contrats de distribution ou de transformation, ainsi que la mise en place d’outils de pilotage financier (marges, saisonnalité, trésorerie). Nous aidons aussi à organiser la supply chain de bout en bout : approvisionnement matières premières, production, conditionnement, distribution locale ou export.",
  },
  {
    icon: "hugeicons:baby-boy-dress",
    text: "Habillement",
    description:
      "SYEL ADVISORY accompagne les marques, créateurs et industriels du textile dans la protection juridique des créations (marques, modèles, licences), la stratégie de distribution (franchises, marketplaces, boutiques), l’optimisation de la production (flux tendus, délais), et le pilotage financier (coût de revient, rentabilité par collection). Nous intervenons également sur les enjeux de conformité sociale et environnementale de la filière.",
  },
  {
    icon: "solar:cosmetic-broken",
    text: "Cosmétique",
    description:
      "Nous conseillons les entreprises cosmétiques dans l’enregistrement des formules, la conformité aux réglementations locales/internationales, la protection de la propriété intellectuelle (recettes, packaging, marques), la stratégie de financement pour le développement produit, et l’organisation de la chaîne logistique (matières premières, emballage, distribution multicanale). Un secteur où innovation et rigueur réglementaire doivent avancer ensemble.",
  },
  {
    icon: "material-symbols:workspace-premium-outline",
    text: "Art & Culture",
    description:
      "Notre accompagnement couvre la protection des œuvres (droits d’auteur, cession, dépôt), la structuration des projets culturels (financements, partenariats, mécénat), la gestion contractuelle des artistes et prestataires, ainsi que l’organisation logistique d’événements (expositions, tournées, festivals). SYEL ADVISORY favorise la professionnalisation des acteurs culturels tout en respectant la singularité de leur activité.",
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
