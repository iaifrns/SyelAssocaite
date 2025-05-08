import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import { Layout } from "./layout/Layout";
import ErrorBoundary from "./common/ErrorBoundary";
import GeneralProvider from "./context/GeneralProvider";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
}

export default App;
