import React from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";

export default function Notes() {
  return (
    <>
      <div className="flex flex-col w-full h-full py-10 p-8 overflow-y-scroll">
        <div className="flex flex-col gap-5">
          <div>

          <Heading>Academic Notes</Heading>
          </div>
          <div className="flex gap-5 mb-8 bg-four p-12 rounded-3xl ">
            <Card title={"CST 201"} desc={"Algorithm Analysis and Design"} />
            <Card title={"CST 202"} desc={"Data Structures"} />
            <Card title={"CST 203"} desc={"Operating Systems"} />
            <Card title={"CST 204"} desc={"Computer Networks"} />
            <Card title={"CST 204"} desc={"Computer Networks"} />
           
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-10">
          <Heading>Placement Notes</Heading>
          <div className="flex gap-5 bg-four p-12 rounded-3xl">
            <Card title={"Module 1"} desc={"Aptitude & Logical Skills"} />
            <Card title={"Module 2"} desc={"Technical Interview Prep"} />
            <Card title={"Module 3"} desc={"HR Interview Tips"} />
            <Card title={"Module 4"} desc={"Resume Writing"} />
          </div>
        </div>
        {/* <div className="absolute -top-[-135px] -right-[-120px] bg-gray-200 text-black px-5 py-2 rounded-2xl shadow-md">
          S5
        </div> */}
      </div>
    </>
  );
}
