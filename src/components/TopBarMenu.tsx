import { generalInfo } from "@/constants/informations";
import { menuList } from "@/constants/menu";
import { GeneralContext } from "@/context/GeneralProvider";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";

const TopBarMenu = ({ active }: { active: string }) => {
  const {setOpenSidebar} = useContext(GeneralContext)
  return (
    <div className="bg-primary w-full py-4 px-8 flex justify-between items-center 2xl:w-[80%] md:w-[90%]">
      <p className="md:text-2xl text-xl font-semibold font-playfair text-white cursor-pointer">
        {generalInfo.company}
      </p>
      <div className="flex gap-6 items-center max-md:hidden">
        {menuList.map((text, ind) => (
          <p
            className={`${
              active == text ? "text-white font-semibold" : "text-gray-300"
            } transition-all duration-300 font-poppins cursor-pointer`}
            key={text + ind}
          >
            {text}
          </p>
        ))}
      </div>
      <div className="flex md:hidden">
      <Icon
          icon="uiw:menu-fold"
          width="20"
          height="20"
          className="text-white"
          onClick={()=>{
            setOpenSidebar(true)}}
        />
      </div>
    </div>
  );
};

export default TopBarMenu;
