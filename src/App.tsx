import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import { Layout } from "./layout/Layout";
import ErrorBoundary from "./common/ErrorBoundary";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
