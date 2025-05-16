import { images } from "@/constants/images";
import type { Employe } from "@/types/employees";

const employees: Employe[] = [
  {
    image: images.person.PERSON1,
    title: "Associé-Gérant",
    name: "SYLVAIN ELOGO",
  },
  {
    image: images.person.PERSON2,
    title: "Associé-Senior",
    name: "DIANE BELLA",
  },
  {
    image: images.person.PERSON3,
    title: "Associé-Senior",
    name: "KEVIN MPILA",
  },
  {
    image: images.person.PERSON4,
    title: "Collaboratrice",
    name: "FORTUNE ENANGA",
  },
  {
    image: images.person.PERSON5,
    title: "Collaboratrice",
    name: "DORETTE SANDREINE ABOMO",
  },
];

export { employees };
