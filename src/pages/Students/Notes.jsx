import React, { useContext } from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { LoadingContext } from "../../ContextStore";

const PlacementNotes = {
  CSE: [
    {
      title: "Data Structures and Algorithms",
      description: "Includes arrays, trees, sorting, and problem-solving.",
    },
    {
      title: "Database Management Systems",
      description: "Covers SQL, normalization, and transactions.",
    },
    {
      title: "Operating Systems",
      description: "Focus on processes, memory, and scheduling.",
    },
    {
      title: "Computer Networks",
      description: "OSI model, routing, HTTP, and socket basics.",
    },
    {
      title: "Object-Oriented Programming",
      description: "Covers classes, inheritance, and design concepts.",
    },
    {
      title: "Aptitude & Reasoning",
      description: "Covers logic, math, and problem-solving skills.",
    },
    {
      title: "System Design Basics",
      description: "Intro to architecture, scaling, and databases.",
    },
    {
      title: "Resume & Profile Building",
      description: "Tips to improve resume and LinkedIn profile.",
    },
    {
      title: "Mock Interviews & HR Questions",
      description: "Practice behavioral and common HR questions.",
    },
    {
      title: "Coding Platforms Practice",
      description: "Solve problems on LeetCode, GFG, and others.",
    },
    {
      title: "Internship Preparation",
      description: "Tips and topics for cracking internships.",
    },
    {
      title: "Core Subjects Revision",
      description: "Quick recap of DBMS, OS, CN, and COA.",
    },
  ],
};

export default function Notes() {
  const [loading, setLoading] = useContext(LoadingContext);
  const [selectedSem, setSelectedSem] = useState(1);
  const [courseList, setCourseList] = useState([]);
  const [placementNotes, setPlacementNotes] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const userdata = JSON.parse(user);
    if (user == null) {
      window.location.href = "/login";
    }

    axios
      .get(`/notes/courses/list/${userdata.department}/${selectedSem}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCourseList(res.data.courses);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error(`Error fetching courses ${err.message}`);
      });

    axios
      .get(`/notes/placements`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setPlacementNotes(res.data.placements);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error(`Error fetching placement notes ${err.message}`);
      });
  }, [selectedSem]);

  return (
    <>
      <div className="flex flex-col w-full h-full py-10  p-8 overflow-y-scroll custom-scrollbar ">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <Heading>Academic Notes</Heading>
            <select
              name=""
              onChange={(e) => setSelectedSem(e.target.value)}
              value={selectedSem}
              id=""
              className="px-7 text-xl outline-primary appearance-none cursor-pointer rounded-md py-1 bg-four">
              <option value={1}>S1</option>
              <option value={2}>S2</option>
              <option value={3}>S3</option>
              <option value={4}>S4</option>
              <option value={5}>S5</option>
              <option value={6}>S6</option>
              <option value={7}>S7</option>
              <option value={8}>S8</option>
            </select>
          </div>
          <div className="flex gap-5 mb-8 bg-four p-12 rounded-3xl ">
            <div className="flex gap-5 overflow-x-auto custom-scrollbar">
              {Array.isArray(courseList) &&
                courseList.map((course, index) => (
                  <Card
                    key={index}
                    title={course.course_code}
                    desc={course.name}
                    onClick={() => {
                      window.location.href += `/${course.course_code}`;
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-10">
          <Heading>Placement Notes</Heading>
          <div className="flex gap-5 bg-four p-12 rounded-3xl">
            <div className="  flex gap-5  overflow-x-scroll custom-scrollbar">
              {placementNotes.map((note, index) => (
                <Card
                  key={index}
                  title={note.title}
                  desc={note.description}
                  onClick={() => {
                    window.location.href = note.doc_url;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
