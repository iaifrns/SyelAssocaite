import { generalInfo } from "@/constants/informations";
import { allEmployees } from "@/data/employees";
import { useState } from "react";

const PartnersSection = () => {
    const [isHovered, setIsHovered] = useState(-1);
    return (
        <div className="component-container flex-col items-center mt-12 gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="md:text-2xl text-xl font-semibold font-poppins">
              Partnaire chez {generalInfo.company}
            </p>
            <div className="w-[1px] bg-primary md:h-[32px] h-[24px]"></div>
          </div>
          <div className="grid md:grid-cols-3">
            {allEmployees.map((employe, ind) => (
              <div className="p-2">
                <div className="flex flex-col gap-8 h-full w-full bg-gray-100 border border-gray-300">
                  <div
                    className="w-full h-[350px] relative overflow-hidden"
                    onMouseEnter={() => setIsHovered(ind)}
                    onMouseLeave={() => setIsHovered(-1)}
                  >
                    <div
                      className={`${
                        isHovered != ind ? "opacity-100" : "opacity-0"
                      } transition-all duration-500 ease-in-out absolute blur-bg h-full w-full z-10`}
                    ></div>
                    <img
                      src={employe.image}
                      alt={employe.image}
                      className={`h-full w-full object-cover rounded-t-sm transition-all duration-500`}
                    />
                  </div>
                  <div className="flex flex-col items-center mb-3">
                    <p className="text-xl font-semibold font-playfair">
                      {employe.name}
                    </p>
                    <p className="text-gray-500 font-poppins text-sm">
                      {employe.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

export default PartnersSection;
