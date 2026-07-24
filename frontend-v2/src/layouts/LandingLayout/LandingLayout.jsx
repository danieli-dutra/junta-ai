import { Outlet } from "react-router-dom";

import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

import "./LandingLayout.css";

function LandingLayout() {
  return (
    <div className="landing-layout">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default LandingLayout;