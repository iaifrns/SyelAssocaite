import { CarouselNext, CarouselPrev } from "@/components/carouselButton";
import TopBarMenu from "@/components/TopBarMenu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { commonInfo } from "@/constants/informations";
import { GeneralContext } from "@/context/GeneralProvider";
import { caroselData } from "@/data/caroselData";
import { Menu } from "@/enum/Menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";

const Header = () => {
  const { index } = useContext(GeneralContext);

  return (
    <div className="w-full md:h-[80%] h-full relative overflow-hidden">
      <Carousel className="relative w-full h-full">
        <div className="absolute w-full z-10 h-full blur-bg flex items-center justify-center">
          <div className="flex w-full flex-col h-full md:py-8 gap-8 max-md:gap-4 items-center">
            <div className="2xl:w-[80%] md:w-[90%] w-full flex justify-between items-center max-md:hidden">
              <div className="flex justify-between w-full">
                <div className="flex items-start gap-1">
                  <Icon
                    icon="file-icons:pointwise"
                    width="24"
                    height="24"
                    className="text-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-semibold font-poppins text-xl">
                      {commonInfo.positive1Title}
                    </p>
                    <p className="text-white">{commonInfo.positive1Sub}</p>
                  </div>
                </div>
                <div className="flex items-start gap-1">
                  <Icon
                    icon="lucide:star"
                    width="24"
                    height="24"
                    className="text-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-semibold font-poppins text-xl">
                      {commonInfo.positive2Title}
                    </p>
                    <p className="text-white">{commonInfo.positive2Sub}</p>
                  </div>
                </div>
                <div className="flex items-start gap-1">
                  <Icon
                    icon="codicon:workspace-trusted"
                    width="24"
                    height="24"
                    className="text-white"
                  />
                  <div className="flex flex-col">
                    <p className="text-white font-semibold font-poppins text-xl">
                      {commonInfo.positive3Title}
                    </p>
                    <p className="text-white">{commonInfo.positive3Sub}</p>
                  </div>
                </div>
                <button className="p-4 bg-white rounded-[4px] text-secondary cursor-pointer">
                  <div className="flex gap-4 items-center">
                    <Icon icon="mdi:chat-outline" className="text-lg" />
                    <p className="font-semibold font-poppins text-sm">
                      FREE CONSULTANT
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <TopBarMenu active={Menu.HOME} />
            <div className="justify-between flex w-full items-center max-md:h-full ">
              <CarouselPrev />
              <div className="component-container flex-col gap-12 max-md:gap-6 mt-6 h-full max-md:items-center max-md:justify-center max-md:mt-0">
                <div className="flex flex-col gap-4 max-md:items-center">
                  <p className="text-[52px] max-md:text-center max-md:w-full max-md:text-[32px] transition-all duration-300 ease-in-out text-white font-playfair font-bold">
                    {caroselData[index].title}
                  </p>
                  <div className="w-[80px] h-[6px] max-md:w-[50px] max-md:h-[4px] rounded-full bg-white"></div>
                </div>
                <p className="font-poppins text-white max-md:w-[80%] max-md:text-sm max-md:text-center w-[60%]">
                  {caroselData[index].desc}
                </p>
                <button className="p-4 bg-white text-primary flex gap-2 w-fit rounded-md items-center">
                  <p className="font-poppins text-sm font-bold max-md:text-xs">
                    CONTACT NOW
                  </p>
                  <Icon icon="majesticons:arrow-right" width="20" height="20" />
                </button>
              </div>
              <CarouselNext />
            </div>
          </div>
        </div>
        <CarouselContent className="h-full border-0 w-full relative z-0">
          {caroselData.map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="w-full h-full relative">
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Header;
