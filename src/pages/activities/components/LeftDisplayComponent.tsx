import type { ActivityType } from "@/types/acticity";
import { Icon } from "@iconify/react/dist/iconify.js";

const LeftDisplayComponent = ({ activity }: { activity: ActivityType }) => {
  return (
    <div className="flex gap-8 items-center max-md:flex-col">
      <Icon
        icon={activity.icon}
        className="text-[80px] md:text-[160px] text-primary hover:text-secondary hover:scale-110 transition-all duration-300"
      />
      <div className="w-full md:w-[70%] flex flex-col gap-3">
        <p className="font-poppins font-semibold max-md:text-center">{activity.text}</p>
        <p className="font-poppins text-xs">{activity.description}</p>
      </div>
    </div>
  );
};

export default LeftDisplayComponent;
