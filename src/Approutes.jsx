import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Signin from "./pages/Authorization/Signin";
import Signup from "./pages/Authorization/Signup";

import Student_Dashboard from "./pages/Students/Dashboard";
import Student_Dashboard_Home from "./pages/Students/Home";
import Student_Roadmaps_Home from "./pages/Students/Roadmaps/Roadmaps";
import Student_Roadmaps_Roadmap from "./pages/Students/Roadmaps/Roadmap";
import Student_Notes from "./pages/Students/Notes";
import Student_Notes_Note from "./pages/Students/Note";
import Student_Event from "./pages/Students/Events";
import Student_Query from "./pages/Students/Query";

import Faculty_Dashboard from "./pages/Faculty/Dashboard";
import Faculty_Dashboard_Home from "./pages/Faculty/Home";
import Faculty_Dashboard_Notes from "./pages/Faculty/Notes";

import Alumni_Dashboard from "./pages/Alumni/Dashboard";
import Alumni_Dashboard_Home from "./pages/Alumni/Home";
import Alumni_Dashboard_Events from "./pages/Alumni/Oppurtunities";

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
            path="roadmaps/roadmap/:dep/:year"
            element={<Student_Roadmaps_Roadmap />}
          />
          <Route path="notes" element={<Student_Notes />} />
          <Route path="notes/note" element={<Student_Notes_Note />} />
          <Route path="event" element={<Student_Event />} />
          <Route path="query" element={<Student_Query />} />
        </Route>
        <Route path="/faculty/*" element={<Faculty_Dashboard />}>
          <Route path="dashboard" element={<Faculty_Dashboard_Home />} />
          <Route path="notes" element={<Faculty_Dashboard_Notes />} />
        </Route>
        <Route path="/alumni/*" element={<Alumni_Dashboard />}>
          <Route path="dashboard" element={<Alumni_Dashboard_Home />} />
          <Route path="oppurtunities" element={<Alumni_Dashboard_Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
