import { images } from "../../../constants/images";
import ClientTestimony from "./ClientTestimony";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import CustomInput from "../../../components/CustomInput";
import React from "react";

const smallDesc = [
  "Le droit est un domaine complexe. L’ignorer peut avoir de lourdes conséquences. Chez SYEL ADVISORY, nous sommes là pour vous conseiller et vous protéger.",
  "Une mauvaise gestion financière peut freiner la croissance de votre entreprise. Confiez votre stratégie à nos experts pour optimiser vos décisions.",
  "Une chaîne d’approvisionnement mal maîtrisée peut coûter cher. Nos consultants vous accompagnent pour fluidifier vos opérations et booster votre efficacité logistique.",
];

const ClientReviewAndContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    lawType: "",
    message: "",
  });

  const [textSlide, setTextSlide] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      let i = textSlide + 1;
      if (i < 3) {
        setTextSlide(i);
      } else {
        setTextSlide(0);
      }
    }, 4000);
    return () => clearInterval(time);
  }, [textSlide]);

  return (
    <div className="w-full h-full relative">
      <ClientTestimony />
      <div className="w-full h-[600px] max-md:hidden overflow-hidden relative z-0">
        <Parallax speed={-30}>
          <img
            src={images.lawImg.LAW5}
            alt={images.lawImg.LAW5}
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>
      <div className="md:absolute w-full md:h-full md:z-10 md:top-0 flex flex-col md:justify-end items-center">
        <div className="md:mb-[70px] 2xl:mb-[150px] bg-white py-8 md:px-8 md:py-16 md:w-[55%] w-[90%] flex flex-col gap-8 rounded-md items-center">
          <div className="flex flex-col gap-3 items-center">
            <p className="text-[32px] font-playfair font-bold">
              Consultation Gratuite
            </p>
            {smallDesc.map((text, ind) => (
              <p
                className={`text-gray-400 font-poppins text-justify text-[14px] text-balance w-[90%] 2xl:w-[80%] md:text-center max-md:text-xs text-sm transition-all duration-500 ease-in-out h-[70px] ${
                  ind == textSlide ? "opacity-100" : "opacity-0 hidden"
                }`}
                key={"small-desc-" + ind}
              >
                {text}
              </p>
            ))}
          </div>
          <div className="flex max-md:flex-col w-full justify-between gap-8">
            <CustomInput
              placeholder="Nom"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <CustomInput
              placeholder="Numero"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex max-md:flex-col w-full justify-between gap-8">
            <select
              name=""
              id=""
              className="p-4 focus:outline-none bg-[rgba(230,230,230)] w-full font-poppins"
            >
              <option value="Conseil Juridique">Conseil Juridique</option>
              <option value="Conseil en Finance d’Entreprise">
                Conseil en Finance d’Entreprise
              </option>
              <option value="Conseil Supply Chain">Conseil Supply Chain</option>
            </select>
            <CustomInput
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder={"Message"}
            className="w-full h-[180px] bg-[rgba(230,230,230)] font-poppins p-4 focus:outline-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button className="w-full p-4 bg-primary text-white font-bold font-poppins">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewAndContact;
