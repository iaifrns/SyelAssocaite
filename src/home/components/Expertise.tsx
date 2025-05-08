import Expertise from "@/components/Expertise";
import { expertises } from "@/data/expertises";
import { useNavigate } from "react-router-dom";

const ExpertiseSection = () => {
  const navigate = useNavigate();
  return (
    <div className="component-container flex-col gap-8 py-16">
      <div className="w-full flex flex-col gap-2 items-center">
        <p className="text-xl font-semibold text-gray-400 font-poppins">
          What we are expert at
        </p>
        <p className="text-[32px] font-bold font-playfair">
          Legal Practices Area
        </p>
        <div className="h-[4px] rounded-lg w-[70px] bg-main-text"></div>
      </div>
      <div className="w-full grid md:grid-cols-3 max-md:grid-cols-1 gap-8">
        {expertises.map((exp, ind) => (
          <Expertise
            key={"expertise" + ind}
            icon={exp.icon}
            title={exp.title}
            desc={exp.desc}
            onclick={() => navigate(exp.link)}
            secondColor={(ind + 1) % 2 == 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
