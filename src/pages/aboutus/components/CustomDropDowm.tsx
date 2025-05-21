import { Icon } from "@iconify/react/dist/iconify.js";

const CustomDropDowm = ({ title, desc, open, onclick }: { title: string; desc: string, open:boolean, onclick: ()=>void }) => {
  return (
    <div className="flex flex-col border-b border-gray-300">
      <div className="py-4 px-2 flex items-center gap-4">
        <Icon
          icon={open ? "lucide:minus" : "mynaui:plus"}
          className="text-xl transition-all duration-300 cursor-pointer"
          onClick={onclick}
        />
        <p className="font-semibold text-2xl font-playfair text-gray-500">
          {title}
        </p>
      </div>
      <div className={`transition-all duration-300 ease-out pl-11 ${open ? 'opacity-100 h-fit pb-4' : 'opacity-0 h-0'}`}>
        <p className="font-poppins text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default CustomDropDowm;
