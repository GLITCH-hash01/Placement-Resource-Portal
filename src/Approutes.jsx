import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Signin from "./pages/Authorization/Signin";
import Signup from "./pages/Authorization/Signup";

import Student_Dashboard from "./pages/Students/Dashboard";
import Student_Dashboard_Home from "./pages/Students/Home";
import Student_Roadmaps_Home from "./pages/Students/Roadmaps/Roadmaps";
import Student_Roadmaps_Roadmap from "./pages/Students/Roadmaps/Roadmap";

import Faculty_Dashboard from "./pages/Faculty/Dashboard";
import Faculty_Dashboard_Home from "./pages/Faculty/Home";
import Faculty_Dashboard_Notes from "./pages/Faculty/Notes";

import Alumni_Dashboard from "./pages/Alumni/Dashboard";
import Alumni_Dashboard_Home from "./pages/Alumni/Home";

export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student/*" element={<Student_Dashboard />}>
          <Route path="dashboard" element={<Student_Dashboard_Home />} />
          <Route path="roadmaps" element={<Student_Roadmaps_Home />} />
          <Route
            path="roadmaps/roadmap"
            element={<Student_Roadmaps_Roadmap />}
          />
        </Route>
        <Route path="/faculty/*" element={<Faculty_Dashboard />}>
          <Route path="dashboard" element={<Faculty_Dashboard_Home />} />
          <Route path="notes" element={<Faculty_Dashboard_Notes />} />
        </Route>
        <Route path="/alumni/dashboard/*" element={<Alumni_Dashboard />}>
          <Route index element={<Alumni_Dashboard_Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
