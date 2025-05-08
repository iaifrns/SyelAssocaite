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
        width="48"
        height="48"
        className={`${
          canScrollNext ? "text-white" : "text-gray-400"
        } cursor-pointer`}
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
        width="48"
        height="48"
        className={`${
          canScrollPrev ? "text-white" : "text-gray-400"
        } cursor-pointer`}
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
