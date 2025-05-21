import { Menu } from "../enum/Menu";

const menuList: { menu: string; link: string }[] = [
  {
    menu: Menu.HOME,
    link: "/",
  },
  {
    menu: Menu.ABOUTUS,
    link: "/about_us",
  },
  {
    menu: Menu.CONTACTUS,
    link: "/contact_us",
  },
];

export { menuList };
