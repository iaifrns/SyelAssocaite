import { SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "../home/components/TopBar";
import TopMenuBar from "@/components/TopMenuBar";
import { Menu } from "@/enum/Menu";
import Footer from "../home/components/Footer";
import PartnersSection from "./components/PartnersSection";
import Testimony from "./components/Testimonies";
import OurValues from "./components/OurValues";

const AboutUsPage = () => {

  return (
    <SidebarProvider open={true}>
      <div className="flex flex-col items-center w-full">
        <div className="component-container">
          <TopBar />
        </div>
        <TopMenuBar
          active={Menu.ABOUTUS}
          sub="A greate team"
          title="Nos Patenaire"
        />
        <PartnersSection />
        <Testimony />
        <OurValues />
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default AboutUsPage;
