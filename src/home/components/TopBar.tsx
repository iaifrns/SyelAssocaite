import { generalInfo } from "../../constants/informations";
import { Icon } from "@iconify/react";

const TopBar = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-6">
        <div className="topbar-container">
          <Icon icon="mdi:phone" className="topbar-icon" />
          <p>{generalInfo.phone}</p>
        </div>
        <div className="topbar-container">
          <Icon icon="tabler:mail-filled" className="topbar-icon" />
          <p>{generalInfo.email}</p>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="topbar-container">
          <Icon icon="svg-spinners:clock" className="topbar-icon" />
          <p>{generalInfo.openings}</p>
        </div>
        <div className="gap-2 flex items-center">
          <Icon icon="ri:facebook-fill" className="text-primary text-xl" />
          <Icon icon="ri:twitter-x-line" className="text-primary text-xl" />
          <Icon icon="line-md:tiktok" className="text-primary text-xl" />
          <Icon icon="ri:linkedin-fill" className="text-primary text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
