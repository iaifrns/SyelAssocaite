import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { caroselData } from "@/data/caroselData";
import React from "react";
import { images } from "@/constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import { commonInfo } from "@/constants/informations";
import TopBarMenu from "@/components/TopBarMenu";
import { Menu } from "@/enum/Menu";
import { SidebarProvider } from "@/components/ui/sidebar";

const Header = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full h-screen relative">
        <Carousel
          plugins={[plugin.current]}
          className="relative w-full h-screen"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <div className="absolute w-full z-10 h-full blur-bg flex items-center justify-center">
            <div className="flex 2xl:w-[80%] md:w-[90%] w-full flex-col h-full md:py-8 gap-8">
              <div className="w-full flex justify-between items-center max-md:hidden">
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
            </div>
          </div>
          <CarouselContent className="h-screen border-0 w-full relative z-0">
            {caroselData.map((item, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="w-full h-full">
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
