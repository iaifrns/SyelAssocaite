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
      <div className="relative w-full h-screen">
        <div className="absolute w-full z-10 h-full blur-bg flex items-center justify-center">
          <div className="flex w-full flex-col h-full md:py-8 gap-8 max-md:gap-4 items-center">
            <div className="2xl:w-[80%] md:w-[90%] w-full flex justify-between items-center max-md:hidden max-w-[1224px]">
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
            <TopBarMenu active={'/consultation'} />
            <div className="justify-between flex w-full items-center max-md:h-full 2xl:h-[60%]">
              <div className="component-container flex-col gap-12 max-md:gap-6 mt-6 h-full max-md:items-center justify-center max-md:mt-0">
                content //////////
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen border-0 w-full z-0">
            <div className="pl-0">
              <div className="w-full h-screen">
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
