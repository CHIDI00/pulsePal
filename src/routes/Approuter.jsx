import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Index from "../pages/Index";
import ScrollToTop from "../components/ScrollToTop";
import Dashboard_page from "../pages/Dashboard_page";
import Assistant from "../pages/Assistant";
import Settings from "../pages/Settings";

export default function Approuter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="dashboard" element={<Dashboard_page />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
