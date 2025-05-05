import TopBar from "./components/TopBar";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col 2xl:w-[80%] w-[90%] h-full">
        <TopBar />
      </div>
    </div>
  );
};

export default HomePage;
