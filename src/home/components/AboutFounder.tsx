import { images } from "@/constants/images";

const AboutFounder = () => {
  return (
    <div className="max-md:opacity-0 max-md:h-0 component-container bg-primary rounded-lg shadow-lg md:absolute z-20 bottom-0 max-md:pointer-events-none">
      <div className="p-16 flex-1 flex flex-col gap-8">
        <p className="text-white text-3xl font-playfair">About Syel Advisory</p>
        <p className="text-gray-300 font-poppins text-sm">
          SYEL ADVISORY propose une vision stratégique de l’entrepreneuriat en
          Afrique subsaharienne, axée sur le développement de réseaux
          économiques et la valorisation de la marque. Le cabinet offre un
          service personnalisé de qualité, guidé par des valeurs fortes, avec
          pour priorité l’excellence, l’innovation et l’écoute du client.<br/>
          <p className="mt-2 font-playfair font-bold">"Le meilleur moyen de prévoir le futur, c’est de le créer"</p>
        </p>
        <div>
          <p className="text-2xl font-tangerine font-bold text-white">
            Peter DRUCKER
          </p>
          <p className="text-main-text font-poppins text-sm">
            CEO, Syel Advisory
          </p>
        </div>
      </div>
      <div className="flex-1 relative">
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
