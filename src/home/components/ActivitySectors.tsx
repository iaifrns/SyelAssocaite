import CarouselActivities from "@/components/CarouselActivities";

const ActivitySectors = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-8 items-center py-16">
      <div className="flex flex-col items-center gap-4">
        <p className="text-gray-400 font-poppins font-bold">Nos principaux</p>
        <p className="text-3xl font-bold font-playfair">Secteurs D’Activité</p>
        <div className="bg-black w-[60px] h-1 rounded-md"></div>
      </div>
      <CarouselActivities />
    </div>
  );
};

export default ActivitySectors;
