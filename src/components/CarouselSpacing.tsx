import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import { employees } from "../data/employees";
import { useState } from "react";

export function CarouselSpacing() {
  const [isHovered, setIsHovered] = useState(-1);

  return (
    <Carousel className="2xl:w-[80%] w-[90%]">
      <CarouselContent className="-ml-1">
        {employees.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <div className="rounded-sm flex flex-col gap-8 h-full w-full bg-white">
                <div
                  className="w-full h-[350px] relative overflow-hidden"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(-1)}
                >
                  <div
                    className={`${
                      isHovered == index ? "opacity-100" : "opacity-0"
                    } transition-all duration-300 ease-in-out absolute bg-[rgba(0,0,0,0.5)] h-full w-full z-10`}
                  ></div>
                  <img
                    src={item.image}
                    alt={item.image}
                    className={`h-full w-full object-cover rounded-t-sm transition-all duration-500 ${
                      isHovered == index && "scale-110"
                    }`}
                  />
                </div>
                <div className="flex flex-col items-center mb-3">
                  <p className="text-xl font-semibold font-playfair">
                    {item.name}
                  </p>
                  <p className="text-gray-500 font-poppins text-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative w-full mt-4 flex justify-center items-center gap-8">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
