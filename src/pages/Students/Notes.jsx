import React from "react";
import Card from "../../components/Card";
import star from "../../assets/images/star.png";
import Heading from "../../components/Heading";

export default function Notes() {
  return (
    <>
      <div className="flex flex-col w-full h-full p-8 overflow-y-scroll">
        <Heading>Academic Notes</Heading>
        <div className="grid grid-cols-4 gap-3 mb-8 bg-four p-12 rounded-3xl">
          <Card title={"CST 201"} desc={"Algorithm Analysis and Design"} />
          <Card title={"CST 202"} desc={"Data Structures"} />
          <Card title={"CST 203"} desc={"Operating Systems"} />
          <Card title={"CST 204"} desc={"Computer Networks"} />
        </div>
        <div className="max-w-75 bg-primary my-10 p-2">
          <h2 className="text-4xl font-bold font-primary text-black mb-4">
            Placement Notes
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4 bg-four p-12 rounded-3xl">
          <Card title={"Module 1"} desc={"Aptitude & Logical Skills"} />
          <Card title={"Module 2"} desc={"Technical Interview Prep"} />
          <Card title={"Module 3"} desc={"HR Interview Tips"} />
          <Card title={"Module 4"} desc={"Resume Writing"} />
        </div>
      </div>
    </>
  );
}
