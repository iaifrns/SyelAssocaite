import TopMenuBar from "@/components/TopMenuBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { detailExpertise } from "@/data/expertises";
import { Expertise } from "@/enum/Expertise";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../home/components/TopBar";
import type { DetailExpertise } from "@/types/expertise";
import { activities } from "@/data/activities";

const ExpertisePage = () => {
  const { expertise } = useParams();
  const [expertiseITem, setExpertiseITem] = useState(
    detailExpertise[Expertise.JURIDIQUE]
  );
  const [expertiseList, setExpertiseList] = useState<DetailExpertise[]>([]);

  const navigateTo = useNavigate();

  useEffect(() => {
    setExpertiseITem(detailExpertise[expertise ?? Expertise.JURIDIQUE]);
    setExpertiseList(
      Object.values(detailExpertise).filter(
        (it) =>
          it.title != detailExpertise[expertise ?? Expertise.JURIDIQUE].title
      )
    );
  }, [expertise]);
  return (
    <SidebarProvider open={true}>
      <div className="flex flex-col items-center w-full">
        <div className="component-container">
          <TopBar />
        </div>
        <TopMenuBar
          active={"expertise"}
          sub={expertiseITem.sub}
          title={expertiseITem.title}
        />
        <div className="component-container gap-8 py-12 relative">
          <div className="w-3/4 flex flex-col gap-8">
            <p className="font-poppins">{expertiseITem.desc}</p>
            <img
              src={expertiseITem.img}
              alt={expertiseITem.img}
              className="w-full h-[450px] object-cover"
            />
            <div className="flex flex-col gap-4">
              {expertiseITem.descList.map((item, ind) => (
                <div key={item.title + ind} className="flex gap-2">
                  <Icon
                    icon="solar:map-arrow-right-bold-duotone"
                    width="20"
                    height="20"
                    className="text-primary pt-2"
                  />
                  <p className="font-poppins text-sm">
                    <span className="font-playfair text-xl font-semibold text-black">
                      {item.title}
                    </span>{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p>{expertiseITem.text}</p>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-playfair font-bold">
                Notre Engagement
              </p>
              <p className="text-gray-700 font-poppins text-sm">
                SYEL ADVISORY s’engage à travailler en proximité, en mode
                projet, avec souplesse et réactivité. Nous offrons une vitrine
                personnalisée à chaque client, que vous soyez local, régional ou
                international. Notre ambition : vous apporter des solutions
                efficaces, alignées sur vos réalités du terrain, tout en
                respectant les standards internationaux de qualité.
              </p>
            </div>
          </div>
          <div className="w-3/12 flex flex-col gap-8 h-fit static top-0">
            <div className="flex flex-col gap-3">
              <p className="font-playfair font-bold text-xl">Autre Expertise</p>
              {expertiseList.map((item, ind) => (
                <div
                  className="flex gap-2 items-center"
                  key={ind + item.sub}
                  onClick={() => navigateTo(`/expertise/${item.title}`)}
                >
                  <img
                    src={item.img}
                    alt={item.img}
                    className="w-[100px] h-[90px] object-cover "
                  />

                  <div className="flex flex-col gap-1 w-fit">
                    <p className="font-playfair font-semibold text-xl">
                      {item.title}
                    </p>
                    <p className="font-poppins text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="gap-4 flex flex-col">
              <p className="font-playfair font-bold text-xl">
                Secteurs D’Activité
              </p>
              <div className="flex flex-wrap gap-2">
                {activities.map((item, ind) => (
                  <p
                    className="py-2 px-4 rounded-md bg-primary text-white font-poppins text-sm"
                    key={item.text + ind}
                  >
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ExpertisePage;
