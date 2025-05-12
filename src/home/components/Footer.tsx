import { generalInfo } from "@/constants/informations";
import { activities } from "@/data/activities";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <div className="w-full bg-[rgb(40,40,40)] flex items-center justify-center flex-col mt-12">
      <div className="component-container justify-between py-8 max-md:flex-col gap-8">
        <div className="flex flex-col gap-4 w-full">
          <p className="text-3xl text-white font-bold font-playfair">
            Syel Advisory
          </p>
          <p className="text-gray-300 font-poppins">
            Nous travaillons au développement de l’activité commerciale
            d’incubateurs, TPEs, PMEs.
          </p>
          <div className="flex gap-4 items-center text-primary">
            <Icon icon="logos:facebook" width="24" height="24" />
            <Icon icon="skill-icons:twitter" width="24" height="24" />
            <Icon icon="logos:tiktok-icon" width="24" height="24" />
            <Icon icon="skill-icons:linkedin" width="24" height="24" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <p className="text-2xl text-white font-bold font-playfair">
            Contact Info
          </p>
          <p className="text-gray-300 font-poppins">
            Yaoundé (Cameroun) | 70, Easy Offices - Montée Ane Rouge
          </p>
          <p className="text-gray-300 font-poppins">{generalInfo.openings}</p>
          <div className="flex flex-col gap-2 text-primary font-semibold font-poppins text-lg">
            <p>{generalInfo.phone}</p>
            <p>{generalInfo.email}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <p className="text-2xl text-white font-bold font-playfair">
            Contact Info
          </p>
          <div className="grid grid-cols-2">
            {activities.map((item, ind) => (
              <p key={ind} className="text-blue-500 font-poppins">{item.text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-md:py-4 md:p-8 bg-[rgb(23,23,23)] flex items-center justify-center">
        <div className="component-container">
          <p className="font-semibold text-gray-400 font-poppins max-md:text-sm">
            Copyright 2025 Syel Advisory, All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
