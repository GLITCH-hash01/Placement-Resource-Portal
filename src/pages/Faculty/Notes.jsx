import React from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { useState } from "react";

export default function Notes() {
  const [noteWindow, setNoteWindow] = useState(false);
  return (
    <div className="flex flex-col items-center gap-3 justify-center h-full w-full">
      <div className="flex items-start justify-between w-full">
        <Heading>Notes</Heading>
        <button className="bg-primary hover:bg-four transition-all duration-150 delay-100 ease-in-out px-4 border-2 rounded-xl text-2xl font-primary font-bold border-black py-2 cursor-pointer flex items-center justify-center w-fit gap-3">
          Add Notes
        </button>
      </div>
      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
        <p className="text-primary ">You haven't uploaded any notes yet </p>
      </div>
      <div className="fixed w-screen h-screen backdrop-blur-xs top-0 left-0 flex items-center justify-center">
        <div className="w-110 rounded-xl justify-around  items-center p-7  h-3/4 bg-white border-2 flex flex-col border-primary">
          <h2 className="text-3xl font-semibold">Add new notes</h2>
          <form action="" className="py-3 flex gap-5 flex-col w-full text-xl">
            <input
              type="text"
              placeholder="Module"
              className="border-b-2 border-primary outline-0 "
            />
            <input
              type="text"
              placeholder="Course Code"
              className="border-b-2 border-primary outline-0 "
            />
            <input
              type="text"
              placeholder="Year"
              className="border-b-2 border-primary outline-0 "
            />
            <input
              type="text"
              placeholder="Semester"
              className="border-b-2 border-primary outline-0 "
            />
            <input type="file" className="appearance-none bg-priamry" />
          </form>
          <button className="w-full rounded-xl bg-primary py-3 bg-">Add</button>
        </div>
      </div>
    </div>
  );
}
