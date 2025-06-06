import { images } from "../../../constants/images";
import { enterpriseValue } from "../../../data/activities";
import { Icon } from "@iconify/react/dist/iconify.js";

const Whyus = () => {
  return (
    <div className="component-container py-12 gap-8 items-center max-md:flex-col">
      <div className="flex-1 relative">
        <div className="absolute w-full h-full z-10">
          <img
            src={images.lawImg.LAW2}
            alt={images.lawImg.LAW2}
            className="h-full object-cover w-[80%] -translate-y-20 translate-x-30 max-md:-translate-y-5 max-md:translate-x-10 rounded-md"
          />
        </div>
        <div className="rounded-md relative overflow-hidden">
          <div className="absolute blur-bg w-[80%] h-full"></div>
          <img
            src={images.lawImg.LAW4}
            alt={images.lawImg.LAW4}
            className="w-[80%] object-cover md:h-[600px]"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-gray-400 font-poppins font-bold max-md:text-sm">
            Nos principes fondateurs
          </p>
          <p className="text-3xl font-playfair font-bold">
            Ce Qui Nous Définit
          </p>
          <div className="w-[60px] h-1 bg-gray-400 rounded-md"></div>
        </div>
        <p className="font-poppins text-primary">
          Chez SYEL ADVISORY, nos valeurs guident chacune de nos actions. Elles
          définissent notre manière de travailler, de collaborer et
          d’accompagner nos clients avec exigence, intégrité et engagement.
        </p>
        <div className="flex flex-col gap-4">
          {enterpriseValue.map((item, ind) => (
            <div className="flex gap-4" key={"enterprise-values-" + ind}>
              <Icon
                icon="solar:map-arrow-right-bold-duotone"
                width="24"
                height="24"
                className="text-primary"
              />
              <div className="flex flex-col">
                <p className="font-poppins font-semibold">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyus;
