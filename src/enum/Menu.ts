export const Menu = {
  HOME: "Home",
  ABOUTUS: "About us",
  CONTACTUS: "Contact us",
} as const;

export type Menu = keyof typeof Menu;
