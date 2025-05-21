import { enterpriseValue } from "@/data/activities";
import CustomDropDowm from "./CustomDropDowm";
import { useState } from "react";

const OurValues = () => {
  const [valueOpen, setValueOpen] = useState(0);

  return (
    <div className="flex w-full items-center justify-center mt-12">
      <div className="component-container justify-center gap-8">
        <div className="flex flex-col w-full gap-6">
          <iframe
            width="100%"
            height="303"
            src="https://www.youtube.com/embed/j5zzEaCs57I"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold font-playfair">Notre ambition</p>
            <p className="text-gray-500">
              Développer des synergies et travailler en mode projet sur les
              besoins spécifiques des clients. Notre vocation est d’offrir une
              vitrine personnalisée à chacun de nos clients présents sur la
              scène internationale, régionale ou locale et leur fournir des
              prestations de services de qualité répondant aux standards
              internationaux.
            </p>
          </div>
        </div>
        <div className="w-full">
          {enterpriseValue.map((value, ind) => (
            <CustomDropDowm
              title={value.title}
              desc={value.detailDesc}
              key={value.title + ind}
              open={valueOpen == ind}
              onclick={() => setValueOpen(ind)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValues;
