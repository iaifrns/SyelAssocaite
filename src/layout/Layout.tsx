import { images } from "@/constants/images";
import { menuList } from "../constants/menu";
import { GeneralContext } from "@/context/GeneralProvider";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { preLoadeImg } from "@/utils/imgPreLoader";

export function Layout() {
  const { openSidebar, setOpenSidebar } = useContext(GeneralContext);
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false)

  const imgs = [
    ...Object.keys(images.finance),
    ...Object.keys(images.lawImg),
    ...Object.keys(images.news),
    ...Object.keys(images.person),
    ...Object.keys(images.transport),
    images.LOGO,
    images.LOGO1,
  ];

  useEffect(()=>{
setLoading(true)
preLoadeImg(imgs).then(()=>{
  setLoading(false)
})
  },[])

  if(loading){
    return (
      <div className="flex w-full h-screen items-center justify-center flex-col gap-3">
        <Icon icon="ri:loader-4-fill" width="32" height="32" className="rotate-180 transition-all duration-300 text-primary" />
        <p className="text-primary font-poppins">Chargement ...</p>
      </div>
    )
  }

  return (
    <ParallaxProvider>
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
                key={text.menu + ind}
                onClick={() => navigateTo(text.link)}
              >
                {text.menu}
              </p>
            ))}
          </div>
        </div>
        <main className="w-full h-full z-0">
          <Outlet />
        </main>
      </div>
    </ParallaxProvider>
  );
}
