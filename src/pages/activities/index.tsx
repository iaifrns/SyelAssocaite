import TopMenuBar from "@/components/TopMenuBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { activities } from "@/data/activities";
import Footer from "../home/components/Footer";
import TopBar from "../home/components/TopBar";
import LeftDisplayComponent from "./components/LeftDisplayComponent";
import RightDisplayCompoent from "./components/RightDisplayCompoent";
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "@/context/GeneralProvider";

const ActivitiesPage = () => {
    const {activityIndex} = useContext(GeneralContext)
    const [actList, setActList] = useState(activities)

    useEffect(()=>{
        setActList([activities[activityIndex], ...activities.filter((_,ind) => ind!=activityIndex)])
    },[])
  return (
    <SidebarProvider open={true}>
      <div className="flex flex-col items-center w-full">
        <div className="component-container">
          <TopBar />
        </div>
        <TopMenuBar
          active={"activities"}
          sub="A greate team"
          title="Nos Patenaire"
        />
        <div className="component-container py-12 flex-col gap-12">
            <div className="flex flex-col justify-center items-center">
                <p className="text-gray-400 font-poppins font-bold md:text-xl">Nos Principaux</p>
            <p className="text-center text-3xl font-playfair font-bold">
            Secteurs D’Activité
          </p>
            </div>
          <div className="flex flex-col gap-10">
            {actList.map((activity, ind) => (
              <>
                {ind % 2 != 0 ? (
                  <RightDisplayCompoent
                    activity={activity}
                    key={activity.text + ind}
                  />
                ) : (
                  <LeftDisplayComponent
                    activity={activity}
                    key={activity.text + ind}
                  />
                )}
              </>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default ActivitiesPage;
