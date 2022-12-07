import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const About = React.lazy(() => import("./pages/AboutPage"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>...</>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}





