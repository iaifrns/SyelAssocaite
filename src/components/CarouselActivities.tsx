import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { activities } from "@/data/activities";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const CarouselActivities = () => {
  const [isHovered, setIsHovered] = useState(-1);
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {activities.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/6 items-center justify-center max-md:flex"
          >
            <div
              className="px-4 py-8 hover:bg-primary flex flex-col justify-center items-center gap-4 w-[90%] shadow-2xl rounded-md border border-gray-300 hover:scale-110 transition-all duration-300 ease-out"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}
            >
              <div
                className={`p-4 rounded-full transition-colors duration-300 ${
                  isHovered == index ? "bg-white" : "bg-primary"
                }`}
              >
                <Icon
                  icon={item.icon}
                  className={` text-[64px] transition-colors duration-300 ease-out ${
                    isHovered == index ? "text-primary" : "text-white"
                  }`}
                />
              </div>
              <p
                className={`font-bold font-playfair text-2xl transition-colors duration-300 ease-out ${
                  isHovered == index && "text-white"
                }`}
              >
                {item.text}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative w-full p-12 flex justify-center items-center gap-8">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default CarouselActivities;
