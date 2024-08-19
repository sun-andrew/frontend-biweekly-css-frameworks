import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./pages/Main";
import { CSSPage } from "./pages/CSS";
import { TailwindPage } from "./pages/Tailwind";
import { BootstrapPage } from "./pages/Bootstrap";
import { StyledComponentsPage } from "./pages/StyledComponents";
import { PurePage } from "./pages/Pure";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "purecss/build/pure-min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/css" element={<CSSPage />} />
          <Route path="/tailwind" element={<TailwindPage />} />
          <Route path="/bootstrap" element={<BootstrapPage />} />
          <Route path="/styled-components" element={<StyledComponentsPage />} />
          <Route path="/pure" element={<PurePage />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
