import { images } from "@/constants/images";
import type { Employe } from "@/types/employees";

const employees: Employe[] = [
  {
    image: images.person.PERSON1,
    title: "CEO",
    name: "PETER DRUCKER",
  },
  {
    image: images.person.PERSON2,
    title: "PARTNER",
    name: "JAMES MILNER",
  },
  {
    image: images.person.PERSON3,
    title: "PARTNER",
    name: "NATHANIEL PHILLIPS",
  },
  {
    image: images.person.PERSON4,
    title: "PARTNER",
    name: "EMMA BUNTON",
  },
  {
    image: images.person.PERSON5,
    title: "PARTNER",
    name: "MELANIE BROWN",
  },
];

export { employees };
