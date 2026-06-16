import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Layout } from "./components/Layout";
import { ThemeProvider } from "./theme";
import { HomePage } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { PortfolioPage } from "./pages/Portfolio";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { AdminLeadsPage } from "./pages/AdminLeads";
import { initAnalytics, trackPageView } from "./analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/leads" element={<AdminLeadsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
