import { images } from "@/constants/images";
import type { Employe } from "@/types/employees";

const employees: Employe[] = [
  {
    image: images.person.PERSON1,
    title: "Associé-Gérant",
    name: "SYLVAIN ELOGO",
  },
  {
    image: images.person.PERSON4,
    title: "Assistante Projets - Marketing.",
    name: "FORTUNE ENANGA",
  },
  {
    image: images.person.PERSON5,
    title: "Assistante projets-RH",
    name: "DORETTE ABOMO",
  },
];

const allEmployees: Employe[] = [
  {
    image: images.person.PERSON1,
    title: "Associé-Gérant",
    name: "SYLVAIN ELOGO",
  },
  {
    image: images.person.PERSON4,
    title: "Assistante Projets - Marketing",
    name: "FORTUNE ENANGA",
  },
  {
    image: images.person.PERSON5,
    title: "Assistante projets-RH",
    name: "DORETTE ABOMO",
  },
  {
    image: images.person.PERSON6,
    title: "Collaborateur",
    name: "SIMO RYAN",
  },
  {
    image: images.person.PERSON7,
    title: "Collaboratrice",
    name: "NDJEBET REBECCA",
  },
  {
    image: images.person.PERSON8,
    title: "Collaborateur",
    name: "SHU SUCCESS",
  },
  {
    image: images.person.PERSON9,
    title: "Collaborateur",
    name: "ELOUNDOU JASON",
  },
  {
    image: images.person.PERSON10,
    title: "Collaboratrice",
    name: "JOYCE",
  },
  {
    image: images.person.PERSON11,
    title: "Collaboratrice",
    name: "KEZIA",
  },
];

export { employees, allEmployees };
