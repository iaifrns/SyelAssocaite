import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import AboutFounder from "./components/AboutFounder";
import { useCalculateScreenSize } from "@/hooks/useCalculateScreenSize";
import Expertise from "./components/Expertise";
import PartnersSection from "./components/PartnersSection";

const HomePage = () => {
  const { sizeY } = useCalculateScreenSize();
  return (
    <SidebarProvider open={true}>
      <div className="flex flex-col items-center w-full">
        <div className="component-container">
          <TopBar />
        </div>
        <div
          className="relative flex items-center flex-col"
          style={{ height: `${sizeY}px` }}
        >
          <Header />
          <AboutFounder />
        </div>
        <Expertise />
        <PartnersSection />
      </div>
    </SidebarProvider>
  );
};

export default HomePage;
