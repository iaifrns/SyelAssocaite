import type { ActivityType } from "@/types/acticity";
import { Icon } from "@iconify/react/dist/iconify.js";

const RightDisplayCompoent = ({ activity }: { activity: ActivityType }) => {
  return (
    <div className="flex gap-8 items-center md:justify-end max-md:flex-col">
        <Icon
        icon={activity.icon}
        className="md:hidden text-[80px] md:text-[160px] text-primary hover:text-secondary hover:scale-110 transition-all duration-300"
      />
      <div className="w-full md:w-[70%] flex flex-col gap-3">
        <p className="font-poppins font-semibold text-center md:text-end">{activity.text}</p>
        <p className="font-poppins text-xs md:text-end">{activity.description}</p>
      </div>
      <Icon
        icon={activity.icon}
        className="hidden md:block text-[160px] text-primary hover:text-secondary hover:scale-110 transition-all duration-300"
      />
    </div>
  );
};

export default RightDisplayCompoent;
