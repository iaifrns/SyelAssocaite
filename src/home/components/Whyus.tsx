import { images } from "@/constants/images";
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
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-gray-400 font-poppins font-bold max-md:text-sm">
            What we are expert at
          </p>
          <p className="text-3xl font-playfair font-bold">
            Why Clients Choose Us
          </p>
          <div className="w-[60px] h-1 bg-gray-400 rounded-md"></div>
        </div>
        <p className="text-lg md:text-2xl text-primary">
          We can provide corporate governance, helping clients manage the
          responsibilities of running a corporation in financial field.
        </p>
        <p className="text-lg md:text-2xl text-gray-500">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows.
        </p>
        <button className="transition-all duration-300 ease-out hover:bg-primary rounded-md p-2 cursor-pointer flex gap-4 text-primary hover:text-white font-semibold md:font-bold w-fit">
            <p>LEARN MORE</p>
            <Icon icon="si:arrow-right-duotone" width="24" height="24" />
        </button>
      </div>
    </div>
  );
};

export default Whyus;
