import { SidebarProvider } from "../../components/ui/sidebar";
import AboutFounder from "./components/AboutFounder";
import ActivitySectors from "./components/ActivitySectors";
import ClientReviewAndContact from "./components/ClientReviewAndContact";
import ContactDetail from "./components/ContactDetail";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PartnersSection from "./components/PartnersSection";
import TopBar from "./components/TopBar";
import Whyus from "./components/Whyus";

const HomePage = () => {
  return (
    <SidebarProvider open={true}>
      <div className="flex flex-col items-center w-full">
        <div className="component-container">
          <TopBar />
        </div>
        <div
          className="relative flex items-center flex-col md:h-[980px] 2xl:h-[1050px] h-fit"
        >
          <Header />
          <AboutFounder />
        </div>
        <Expertise />
        <PartnersSection />
        <ClientReviewAndContact />
        <ActivitySectors />
        <Whyus />
        <ContactDetail />
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default HomePage;
