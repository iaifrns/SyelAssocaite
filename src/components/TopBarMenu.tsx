import { generalInfo } from "../constants/informations";
import { GeneralContext } from "../context/GeneralProvider";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { menuList } from "../constants/menu";
import { useNavigate } from "react-router-dom";

const TopBarMenu = ({ active }: { active: string }) => {
  const { setOpenSidebar } = useContext(GeneralContext);
  const navigateTo = useNavigate()
  return (
    <div className="bg-primary w-full py-4 px-8 flex justify-between items-center  max-w-[1224px]">
      <p className="md:text-2xl text-xl font-semibold font-playfair text-white cursor-pointer">
        {generalInfo.company}
      </p>
      <div className="flex gap-6 items-center max-md:hidden">
        {menuList.map((item, ind) => (
          <p
            className={`${
              active == item.menu ? "text-white font-semibold" : "text-gray-300"
            } transition-all duration-300 font-poppins cursor-pointer`}
            key={item.menu + ind}
            onClick={()=>navigateTo(item.link)}
          >
            {item.menu}
          </p>
        ))}
      </div>
      <div className="flex md:hidden">
        <Icon
          icon="uiw:menu-fold"
          width="20"
          height="20"
          className="text-white"
          onClick={() => {
            setOpenSidebar(true);
          }}
        />
      </div>
    </div>
  );
};

export default TopBarMenu;
