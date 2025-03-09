import React from "react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";

export default function Notes() {
  return (
    <>
      <div className="flex flex-col w-full h-full p-8 overflow-y-scroll">
        <Heading>CST 306 - AAD</Heading>
        <div className="grid grid-cols-4 gap-3 mb-8 bg-four p-12 rounded-3xl">
          <Card title={"Module 1"} desc={"Analysis of algorithm"} />
          <Card title={"Module 2"} desc={"Analysis of algorithm"} />
          <Card title={"Module 3"} desc={"Analysis of algorithm"} />
          <Card title={"Module 4"} desc={"Analysis of algorithm"} />
        </div>
        <Heading>Question Papers</Heading>
      <div className="grid grid-cols-4 gap-4 bg-four p-12 rounded-3xl">
        <Card title={"QP 2022"} desc={"2019 Scheme"} />
        <Card title={"QP 2022"} desc={"2019 Scheme"} />
        <Card title={"QP 2022"} desc={"2019 Scheme"} />
        <Card title={"QP 2022"} desc={"2019 Scheme"} />
      </div>
      </div> 
    </>
  );
}
