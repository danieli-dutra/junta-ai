import { Routes, Route } from "react-router-dom";

import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Assistente from "../pages/Assistente/Assistente";
import Dashboard from "../pages/Dashboard/Dashboard";
import Relatorios from "../pages/Relatorios/Relatorios";
import Perfil from "../pages/Perfil/Perfil";

function AppRoutes() {
  return (
    <Routes>
      {/* Área pública */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      {/* Área autenticada */}
      <Route element={<AuthLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/assistente" element={<Assistente />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;