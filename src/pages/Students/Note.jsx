import React from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import { useParams } from "react-router-dom";

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

const Modules = [
  {
    title: "Module 1",
    desc: "Introduction to Data Structures and Algorithms",
  },
  {
    title: "Module 2",
    desc: "Arrays and Linked Lists",
  },
  {
    title: "Module 3",
    desc: "Stacks and Queues",
  },
  {
    title: "Module 4",
    desc: "Trees and Graphs",
  },
  {
    title: "Module 5",
    desc: "Sorting and Searching",
  },
];

export default function Note() {
  const { course } = useParams();
  return (
    <>
      <div className="flex flex-col w-full h-full py-10  p-8 overflow-y-scroll custom-scrollbar ">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <Heading>{course}</Heading>
          </div>
          <div className="flex gap-5 mb-8 bg-four p-12 rounded-3xl ">
            <div className="flex gap-5 overflow-y-scroll custom-scrollbar">
              {Modules.map((module, index) => (
                <Card key={index} title={module.title} desc={module.desc} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-8 mb-10">
          <Heading>Placement Notes</Heading>
          <div className="flex gap-5 bg-four p-12 rounded-3xl">
            <div className="  flex gap-5  overflow-y-scroll custom-scrollbar">
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
        </div> */}
        {/* <div className="absolute -top-[-135px] -right-[-120px] bg-gray-200 text-black px-5 py-2 rounded-2xl shadow-md">
          S5
        </div> */}
      </div>
    </>
  );
}
