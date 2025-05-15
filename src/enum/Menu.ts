export const Menu = {
  HOME: "Accueil",
  ABOUTUS: "À propos",
  CONTACTUS: "Contactez-nous",
} as const;

export type Menu = keyof typeof Menu;
