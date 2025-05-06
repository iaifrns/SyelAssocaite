import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "./components/Header";
import TopBar from "./components/TopBar";

const HomePage = () => {
  return (
    <SidebarProvider open={true}>
    <div className="flex flex-col justify-center items-center">
      <div className="component-container">
        <TopBar />
      </div>
      <Header />
    </div>
    </SidebarProvider>
  );
};

export default HomePage;
