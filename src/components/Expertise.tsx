import { Icon } from "@iconify/react/dist/iconify.js";

const Expertise = ({
  icon,
  title,
  desc,
  onclick,
  secondColor,
}: {
  icon: string;
  title: string;
  desc: string;
  onclick: () => void;
  secondColor: boolean;
}) => {
  return (
    <div
      className={`w-full px-8 py-12 rounded-md flex flex-col items-center gap-4 ${
        secondColor && "bg-primary"
      } shadow-2xl`}
    >
      <Icon icon={icon} className="text-main-text text-[48px]" />
      <p className={`text-2xl font-bold font-playfair ${secondColor && 'text-white'}`}>{title}</p>
      <p className="text-gray-500 text-center font-poppins text-[16px]">
        {desc}
      </p>
      <button
        className="flex p-2 text-main-text gap-2 font-playfair font-semibold hover:bg-main-text hover:text-white transition-all duration-300 ease-out text-lg cursor-pointer rounded-sm items-center"
        onClick={onclick}
      >
        <p>LEARN MORE</p>
        <Icon icon="stash:arrow-right" width="24" height="24" />
      </button>
    </div>
  );
};

export default Expertise;
