
const NewComponent = ({image, title, desc} : {image:string, title:string, desc:string}) => {
    return (
        <div className="flex flex-col gap-1 w-full cursor-pointer">
            <img src={image} alt={image} className="w-full h-[40px] object-cover" />
            <p className="font-playfair font-semibold">{title}</p>
            <p className="text-xs font-poppins text-gray-400">{desc}</p>
        </div>
    );
}

export default NewComponent;
