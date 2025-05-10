import { menuList } from "@/constants/menu";
import { GeneralContext } from "@/context/GeneralProvider";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  const { openSidebar, setOpenSidebar } = useContext(GeneralContext);
  return (
    <div className="w-full h-full relative">
      <div
        className={`${
          openSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        } absolute z-20 h-full w-full blur-bg flex justify-end md:hidden transition-all duration-200 ease-in-out overflow-hidden`}
      >
        <div
          className={`${
            openSidebar
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-[220px]"
          } w-[220px] bg-[rgb(50,50,50)] flex flex-col transition-all duration-500 ease-out`}
        >
          <div
            className="p-3"
            onClick={() => {
              setOpenSidebar(false);
            }}
          >
            <Icon
              icon="basil:cross-solid"
              width="24"
              height="24"
              className="text-white"
            />
          </div>
          {menuList.map((text, ind) => (
            <p
              className={`transition-all duration-300 font-poppins cursor-pointer p-4 font-semibold text-white`}
              key={text + ind}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
      <main className="w-full h-full z-0">
        <Outlet />
      </main>
    </div>
  );
}
