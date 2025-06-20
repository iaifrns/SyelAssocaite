import { images } from "@/constants/images";
import TopBar from "../home/components/TopBar";
import { Icon } from "@iconify/react/dist/iconify.js";
import TopBarMenu from "@/components/TopBarMenu";

const FreeConsultationPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="component-container">
        <TopBar />
      </div>
      <div className="relative w-full h-screen 2xl:h-[95vh]">
        <div className="absolute w-full z-10 h-full blur-bg flex items-center justify-center">
          <div className="flex w-full flex-col h-full md:py-8 gap-8 2xl:gap-16 max-md:gap-4 items-center">
            <div className="2xl:w-[80%] md:w-[90%] w-full flex justify-between items-center max-md:hidden max-w-[1224px] 2xl:mt-12">
              <div className="flex justify-between w-full items-center">
                <img
                  src={images.LOGO1}
                  alt={images.LOGO1}
                  className="w-[80px]"
                />
                <div className="flex items-start gap-1">
                  <Icon
                    icon="hugeicons:justice-scale-01"
                    width="24"
                    height="24"
                    className="text-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-semibold font-poppins text-xl">
                      Conseil Juridique
                    </p>
                    <p className="text-white">30+ experts à votre service</p>
                  </div>
                </div>
                <div className="flex items-start gap-1">
                  <Icon
                    icon="material-symbols:finance-mode-rounded"
                    width="24"
                    height="24"
                    className="text-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-semibold font-poppins text-xl">
                      Finance d’Entreprise
                    </p>
                    <p className="text-white">Pilotez votre croissance</p>
                  </div>
                </div>
                <div className="flex items-start gap-1">
                  <Icon
                    icon="mdi:shipping-pallet"
                    width="24"
                    height="24"
                    className="text-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-semibold font-poppins text-xl">
                      Supply Chain
                    </p>
                    <p className="text-white">Logistique optimisée</p>
                  </div>
                </div>
              </div>
            </div>
            <TopBarMenu active={"/consultation"} />
            <div className="justify-between flex 2xl:w-[80%] md:w-[90%] items-center h-full max-w-[1224px]">
              <div className="flex w-full flex-col gap-6 2xl:gap-12 max-md:gap-6 mt-6 h-full max-md:items-center py-10 max-2xl:justify-center max-md:mt-0">
                <p className="md:text-[58px] 2xl:text-[64px] text-2xl font-playfair font-bold text-white">
                  Commencez par votre adresse mail
                </p>
                <p className="md:text-xl 2xl:text-2xl font-poppins text-white">
                  Indiquez votre adresse email pour recevoir votre consultation
                  gratuite, nos premiers conseils et un suivi personnalisé dans
                  les plus brefs délais.
                </p>
                <div className="flex gap-2 w-full">
                  <input
                    type="email"
                    className="md:p-6 p-4 border border-b-2 border-white focus:outline-none text-white font-poppins w-full"
                    placeholder="Entrez votre adresse mail s’il vous plaît"
                  />
                  <button className="w-[200px] h-full flex justify-center items-center border border-white font-poppins text-white hover:bg-primary transition-all duration-300 ease-in-out">
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen 2xl:h-[95vh] border-0 w-full z-0">
          <div className="pl-0">
            <div className="w-full h-screen 2xl:h-[95vh]">
              <img
                src={images.lawImg.LAW1}
                alt={images.lawImg.LAW1}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultationPage;
