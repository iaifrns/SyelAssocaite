import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./common/ErrorBoundary";
import GeneralProvider from "./context/GeneralProvider";
import { Layout } from "./layout/Layout";
import AboutUsPage from "./pages/aboutus";
import ContactUsPage from "./pages/contactus";
import ExpertisePage from "./pages/expertise";
import HomePage from "./pages/home";
import ActivitiesPage from "./pages/activities";
import FreeConsultationPage from "./pages/consultation";

function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <Layout />
              </ErrorBoundary>
            }
          >
            <Route index element={<HomePage />} />
            <Route index path="/about_us" element={<AboutUsPage />} />
            <Route index path="/contact_us" element={<ContactUsPage />} />
            <Route path="/expertise/:expertise" element={<ExpertisePage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/consultation" element={<FreeConsultationPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
}

export default App;
