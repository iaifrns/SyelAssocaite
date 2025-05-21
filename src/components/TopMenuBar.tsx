import { images } from "@/constants/images";
import { commonInfo } from "@/constants/informations";
import { Icon } from "@iconify/react/dist/iconify.js";
import TopBarMenu from "./TopBarMenu";

const TopMenuBar = ({active, title, sub}:{active:string, title:string, sub:string}) => {
  return (
    <div
      className="w-full border border-black"
      style={{ backgroundImage: `url(${images.lawImg.LAW3})` }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center blur-bg md:p-16">
        <div className="2xl:w-[80%] md:w-[90%] flex flex-col gap-10 max-w-[1224px] w-full">
          <div className="flex justify-between w-full items-center max-md:hidden">
            <img src={images.LOGO1} alt={images.LOGO1} className="w-[80px]" />
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
                  Consultation gratuite
                </p>
              </div>
            </button>
          </div>
          <TopBarMenu active={active} />
          <div className="p-8 flex flex-col w-full items-center">
            <p className="text-white font-bold font-poppins text-[48px]">{title}</p>
            <p className="text-xl font-playfair font-semibold text-gray-300">{sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenuBar;
