import type { ActivityType } from "@/types/acticity";
import { Icon } from "@iconify/react/dist/iconify.js";

const RightDisplayCompoent = ({ activity }: { activity: ActivityType }) => {
  return (
    <div className="flex gap-8 items-center justify-end">
      <div className="max-w-[700px] flex flex-col gap-3">
        <p className="font-poppins font-semibold text-end">{activity.text}</p>
        <p className="font-poppins text-xs text-end">{activity.description}</p>
      </div>
      <Icon
        icon={activity.icon}
        className="text-[160px] text-primary hover:text-secondary hover:scale-110 transition-all duration-300"
      />
    </div>
  );
};

export default RightDisplayCompoent;
