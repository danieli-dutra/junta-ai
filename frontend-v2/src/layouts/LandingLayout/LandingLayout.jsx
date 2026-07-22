import { Outlet } from "react-router-dom";

import "./LandingLayout.css";

export default function LandingLayout() {
  return (
    <main className="landing-layout">
      <Outlet />
    </main>
  );
}