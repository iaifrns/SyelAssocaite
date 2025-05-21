import { images } from "../../../constants/images";
import { generalInfo } from "../../../constants/informations";

const AboutFounder = () => {
  return (
    <div className="component-container bg-primary rounded-lg shadow-lg md:absolute md:z-20 bottom-0 max-md:pointer-events-none max-md:mt-8">
      <div className="md:p-16 p-4 flex-1 flex flex-col gap-8">
        <p className="text-white text-3xl font-playfair max-md:text-xl">À Propos de {generalInfo.company}</p>
        <p className="text-gray-300 font-poppins text-sm">
          SYEL ADVISORY propose une vision stratégique de l’entrepreneuriat en
          Afrique subsaharienne, axée sur le développement de réseaux
          économiques et la valorisation de la marque. Le cabinet offre un
          service personnalisé de qualité, guidé par des valeurs fortes, avec
          pour priorité l’excellence, l’innovation et l’écoute du client.<br/>
          <div className="flex gap-6 items-center mt-6 max-md:flex-col">
          <p className="font-playfair font-bold">"Le meilleur moyen de prévoir le futur, c’est de le créer"</p>
          <p className="text-sm font-tangerine font-bold text-white">
            Peter DRUCKER
          </p>
          </div>
        </p>
      </div>
      <div className="flex-1 relative max-md:hidden">
        <div className="absolute blur-bg h-full w-full rounded-r-lg"></div>
        <img
          src={images.lawImg.LAW4}
          alt={images.lawImg.LAW4}
          className="w-full h-full object-cover rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default AboutFounder;
