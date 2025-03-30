import React from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const Courses = {
  CSE: {
    s1: [
      { code: "EST100", name: "Engineering Physics" },
      { code: "EST110", name: "Engineering Graphics" },
      { code: "HUN101", name: "Life Skills" },
      { code: "PHT100", name: "Engineering Physics Lab" },
      { code: "MAT101", name: "Calculus" },
      {
        code: "EST130",
        name: "Basics of Electrical and Electronics Engineering",
      },
      { code: "CYT100", name: "Engineering Chemistry" },
      { code: "CYL120", name: "Engineering Chemistry Lab" },
    ],
    s2: [
      { code: "EST102", name: "Programming in C" },
      { code: "EST120", name: "Basics of Civil and Mechanical Engineering" },
      { code: "MAT102", name: "Differential Equations" },
      { code: "EST100", name: "Engineering Physics" },
      { code: "EST112", name: "Environmental Studies" },
      { code: "EST104", name: "Engineering Mechanics" },
      { code: "EST132", name: "Programming Lab in C" },
    ],
    s3: [
      { code: "CST201", name: "Discrete Computational Structures" },
      { code: "CST203", name: "Data Structures" },
      { code: "CST205", name: "Object Oriented Programming" },
      { code: "CST207", name: "Electronic Circuits & Devices" },
      { code: "MCN201", name: "Sustainable Engineering" },
      { code: "CSL203", name: "Data Structures Lab" },
      { code: "CSL205", name: "OOP Lab" },
    ],
    s4: [
      { code: "CST202", name: "Computer Organization & Architecture" },
      { code: "CST204", name: "Operating Systems" },
      { code: "CST206", name: "Database Management Systems" },
      { code: "CST208", name: "Principles of Programming Languages" },
      { code: "MCN202", name: "Constitution of India" },
      { code: "CSL202", name: "Operating Systems Lab" },
      { code: "CSL206", name: "Database Lab" },
    ],
    s5: [
      { code: "CST301", name: "Theory of Computation" },
      { code: "CST303", name: "System Software" },
      { code: "CST305", name: "Computer Networks" },
      { code: "CST307", name: "Microprocessors and Microcontrollers" },
      { code: "HUT300", name: "Professional Ethics" },
      { code: "CSL331", name: "Networks Lab" },
      { code: "CSL333", name: "Hardware Lab" },
    ],
    s6: [
      { code: "CST302", name: "Design and Analysis of Algorithms" },
      { code: "CST304", name: "Compiler Design" },
      { code: "CST306", name: "Software Engineering and Project Management" },
      { code: "CST308", name: "Web Technologies" },
      { code: "CSL332", name: "Compiler Lab" },
      { code: "CSL334", name: "Mini Project" },
    ],
    s7: [
      { code: "CST401", name: "Artificial Intelligence" },
      { code: "CST403", name: "Distributed Computing" },
      { code: "CST405", name: "Computer Graphics & Image Processing" },
      { code: "CSL411", name: "Project Phase I" },
      { code: "CSL413", name: "Seminar" },
    ],
    s8: [
      { code: "CST402", name: "Machine Learning" },
      { code: "CST404", name: "Cyber Security & Privacy" },
      { code: "CSL412", name: "Project Phase II" },
    ],
  },
};
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
  const [selectedSem, setSelectedSem] = useState(1);
  const [courseList, setCourseList] = useState([]);
  console.log(Courses.CSE[selectedSem]);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user == null) {
      window.location.href = "/login";
    }
    const userdata = JSON.parse(user);
    console.log(`/notes/courses/list/${userdata.department}}/${selectedSem}`);
    axios
      .get(`/notes/courses/list/${userdata.department}/${selectedSem}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCourseList(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
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
              {PlacementNotes.CSE.map((note, index) => (
                <Card
                  key={index}
                  title={note.title}
                  desc={note.description}
                  onClick={() => {
                    window.location.href += "/note";
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="absolute -top-[-135px] -right-[-120px] bg-gray-200 text-black px-5 py-2 rounded-2xl shadow-md">
          S5
        </div> */}
      </div>
    </>
  );
}
