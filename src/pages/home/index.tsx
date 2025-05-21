import { SidebarProvider } from "../../components/ui/sidebar";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import AboutFounder from "./components/AboutFounder";
import { useCalculateScreenSize } from "../../hooks/useCalculateScreenSize";
import Expertise from "./components/Expertise";
import PartnersSection from "./components/PartnersSection";
import ClientReviewAndContact from "./components/ClientReviewAndContact";
import ActivitySectors from "./components/ActivitySectors";
import Whyus from "./components/Whyus";
import ContactDetail from "./components/ContactDetail";
import Footer from "./components/Footer";
import React from "react";

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
          style={{ height: sizeY ? `${sizeY}px` : '100%' }}
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
