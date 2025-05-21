import { images } from "../../../constants/images";
import { enterpriseState } from "../../../data/stats";
import { Icon } from "@iconify/react/dist/iconify.js";

const Testimony = () => {
  return (
    <div
      className="w-full bg-cover mt-12"
      style={{ backgroundImage: `url(${images.lawImg.LAW1})` }}
    >
      <div className="w-full h-full blur-bg flex items-center justify-center py-16">
        <div className="component-container border border-gray-300 flex-col items-center px-8 py-12">
          <div className="flex flex-col items-center gap-8">
            <Icon
              icon="pepicons-pencil:play-circle"
              className="text-white text-[75px] max-md:text-[40px]"
            />
            <p className="text-white font-playfair font-semibold text-[38px] max-md:text-2xl">
              Avis de nos clients
            </p>
            <p className="text-center text-gray-300 font-poppins w-full md:w-[70%] text-xl max-md:text-sm">
              Loin de tout stress juridique, au-delà des frontières de
              l’incompréhension, j’ai trouvé chez SYEL ADVISORY une équipe
              attentive, rigoureuse et profondément humaine. Grâce à leur
              accompagnement, chaque étape de mon projet a pris tout son sens.
              Une véritable oasis de clarté dans l’océan complexe du droit.
            </p>
          </div>
          <div className="w-full flex max-md:flex-col max-md:gap-6 justify-between items-center mt-8">
            {enterpriseState.map((data, ind) => (
              <div
                className="flex flex-col items-center"
                key={"enterprise stat-" + ind}
              >
                <p className="text-white font-bold font-playfair text-[59px] max-md:text-3xl">
                  {data.stat}
                </p>
                <p className="text-gray-300 font-poppins text-xl max-md:text-sm">
                  {data.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
