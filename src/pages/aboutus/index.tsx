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
        <div className="w-full py-12 bg-gray-300 flex items-center justify-center mt-12">
          <div className="flex-col items-center component-container gap-4">
            <p className="font-playfair font-bold text-2xl">Nous sommes</p>
            <p className="font-poppins text-sm text-center md:text-balance max-md:text-justify">
              SYEL ADVISORY Cabinet de conseil, initialement dédié au Droit des
              Affaires et à la Propriété Intellectuelle, nous nous développement
              sur la Supply Chain et la Finance pour accompagner de manière
              opérationnelle nos clients sur le terrain. Notre mission est vous
              apporter conseil et souplesse aussi bien au niveau opérationnel
              qu’au niveau stratégique et d’avoir un avantage concurrentiel sur
              votre cœur de marché.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default AboutUsPage;
