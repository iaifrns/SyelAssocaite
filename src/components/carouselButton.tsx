import { Icon } from "@iconify/react/dist/iconify.js";
import { useCarousel } from "./ui/carousel";
import { useContext } from "react";
import { GeneralContext } from "@/context/GeneralProvider";

export const CarouselNext = () => {
  const { scrollNext, canScrollNext } = useCarousel();
  const { index, setIndex } = useContext(GeneralContext);

  return (
    <div className="w-fit h-fit">
      <Icon
        icon="oui:arrow-right"
        className={`${
          canScrollNext ? "text-white" : "text-gray-400"
        } cursor-pointer text-[48px] max-md:text-[32px]`}
        onClick={() => {
          if (canScrollNext) {
            setIndex(index + 1);
            scrollNext();
          }
        }}
      />
    </div>
  );
};

export const CarouselPrev = () => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  const { index, setIndex } = useContext(GeneralContext);

  return (
    <div className="w-fit h-fit">
      <Icon
        icon="oui:arrow-left"
        className={`${
          canScrollPrev ? "text-white" : "text-gray-400"
        } cursor-pointer text-[48px] max-md:text-[32px]`}
        onClick={() => {
          if (canScrollPrev) {
            setIndex(index - 1);
            scrollPrev();
          }
        }}
      />
    </div>
  );
};
