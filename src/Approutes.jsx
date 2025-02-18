import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Signin from "./pages/Authorization/Signin";
import Dashboard from "./pages/Students/Dashboard";
import Student_Dashboard_Home from "./pages/Students/Home";
import Student_Roadmaps_Home from "./pages/Students/Roadmaps/Roadmaps";
import Signup from "./pages/Authorization/Signup";

export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/students/dashboard/*" element={<Dashboard />}>
          <Route index element={<Student_Dashboard_Home />} />
          <Route path="roadmaps" element={<Student_Roadmaps_Home />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
