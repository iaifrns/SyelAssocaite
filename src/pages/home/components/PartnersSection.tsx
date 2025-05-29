import { useNavigate } from "react-router-dom";
import { CarouselSpacing } from "../../../components/CarouselSpacing";
import { generalInfo } from "../../../constants/informations";
import { Icon } from "@iconify/react/dist/iconify.js";

const PartnersSection = () => {
    const navigateTo = useNavigate()
    return (
        <div className='2xl:w-[80%] md:w-[90%] w-full flex py-16 bg-gray-200 flex-col items-center gap-8'>
            <div className='flex flex-col items-center'>
                <p className="text-[32px] font-bold font-playfair max-md:text-center">Partenaires de {generalInfo.company}</p>
                <button className="cursor-pointer p-4 mb-2 flex gap-2 text-gray-500 items-center" onClick={() => navigateTo("/about_us")}>
                    <p className="font-bold">Voir Toutes Les Partenaires</p>
                    <Icon icon="stash:arrow-right" width="24" height="24" />
                </button>
                <div className="h-[4px] rounded-lg w-[60px] bg-black"></div>
            </div>
            <CarouselSpacing/>
        </div>
    );
}

export default PartnersSection;
