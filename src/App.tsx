import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { Layout } from "./layout/Layout";
import ErrorBoundary from "./common/ErrorBoundary";
import GeneralProvider from "./context/GeneralProvider";
import AboutUsPage from "./pages/aboutus";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
}

export default App;
