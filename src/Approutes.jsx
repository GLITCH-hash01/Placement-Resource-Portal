import React from "react";
import { LoadingContext } from "./ContextStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Signin from "./pages/Authorization/Signin";
import Signup from "./pages/Authorization/Signup";
import Query from "./pages/Query";
import Profile from "./pages/Profile";
import Event from "./pages/Event";

import Student_Dashboard_Home from "./pages/Students/Home";
import Student_Roadmaps_Home from "./pages/Students/Roadmaps/Roadmaps";
import Student_Roadmaps_Roadmap from "./pages/Students/Roadmaps/Roadmap";
import Student_Notes from "./pages/Students/Notes";
import Student_Notes_Note from "./pages/Students/Note";
import Student_Events from "./pages/Students/Events";
import Student_Queries from "./pages/Students/Queries";

import Dashboard from "./pages/Dashboard";
import Faculty_Dashboard_Home from "./pages/Faculty/Home";
import Faculty_Dashboard_Notes from "./pages/Faculty/Notes";
import Faculty_Dashboard_Queries from "./pages/Faculty/Queries";

import Alumni_Dashboard_Home from "./pages/Alumni/Home";
import Alumni_Dashboard_Events from "./pages/Alumni/Oppurtunities";
import Alumni_Dashboard_Queries from "./pages/Alumni/Queries";

import Tpc_Dashboard from "./pages/TPC/Home";
import Tpc_Dashboard_Notes from "./pages/TPC/Notes";
import Tpc_Dashboard_Roadmaps from "./pages/TPC/Roadmaps";
import Tpc_Dashboard_Roadmaps_Dep from "./pages/TPC/Roadmaps/Roadmap_dep";
import Tpc_Dashboard_Roadmaps_Year from "./pages/TPC/Roadmaps/Roadmap_year";



export default function Approutes() {
  const [loading, setLoading] = React.useState(true);

  return (
    <BrowserRouter>
      <LoadingContext.Provider value={[loading, setLoading]}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student/*" element={<Dashboard />}>
            
            <Route path="dashboard" element={<Student_Dashboard_Home />} />
            <Route path="roadmaps" element={<Student_Roadmaps_Home />} />
            <Route
              path="roadmaps/roadmap/:dep/:year"
              element={<Student_Roadmaps_Roadmap />}
            />
            <Route path="notes" element={<Student_Notes />} />
            <Route path="notes/:sem/:course" element={<Student_Notes_Note />} />
            <Route path="events" element={<Student_Events />} />
            <Route path="query" element={<Student_Queries />} />
            <Route path="query/:id" element={<Query />} />
            <Route path="profile" element={<Profile />} />
            <Route path="events/:id" element={<Event />} />
          </Route>
          <Route path="/faculty/*" element={<Dashboard />}>
            <Route path="dashboard" element={<Faculty_Dashboard_Home />} />
            <Route path="notes" element={<Faculty_Dashboard_Notes />} />
            <Route path="query" element={<Faculty_Dashboard_Queries />} />
            <Route path="query/:id" element={<Query />} />
          </Route>
          <Route path="/alumni/*" element={<Dashboard />}>
            <Route path="dashboard" element={<Alumni_Dashboard_Home />} />
            <Route path="query" element={<Alumni_Dashboard_Queries />} />
            <Route path="query/:id" element={<Query />} />
            <Route path="oppurtunities" element={<Alumni_Dashboard_Events />} />
          </Route>
          <Route path="/tpc/*" element={<Dashboard />}>
            <Route path="dashboard" element={<Tpc_Dashboard />} />
            <Route path="notes" element={<Tpc_Dashboard_Notes />} />
            <Route path="roadmaps" element={<Tpc_Dashboard_Roadmaps />} />
            <Route
              path="roadmaps/:dep"
              element={<Tpc_Dashboard_Roadmaps_Dep />}
            />
            <Route
              path="roadmaps/:dep/:year"
              element={<Tpc_Dashboard_Roadmaps_Year />}
            />
          </Route>
        </Routes>
      </LoadingContext.Provider>
    </BrowserRouter>
  );
}
