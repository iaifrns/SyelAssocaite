import { menuList } from "@/constants/menu";
import { Icon } from "@iconify/react/dist/iconify.js";

const TopBarMenu = ({ active }: { active: string }) => {
  return (
    <div className="bg-primary w-full py-4 px-8 flex justify-between">
      <p className="md:text-2xl font-semibold font-playfair text-white cursor-pointer">
        Syel Adivsory
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
          width="24"
          height="24"
          className="text-white"
        />
      </div>
    </div>
  );
};

export default TopBarMenu;
