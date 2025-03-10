import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";

export default function Query() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 justify-between relative">
        <textarea
          name=""
          id=""
          placeholder="Ask your questions..."
          className="bg-four w-full rounded-md p-4"></textarea>
        <button className="bg-primary text-white px-6 py-2 rounded-md absolute bottom-3 right-3">
          Post Query
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-semibold">Your Questions</h3>
        <div className="flex flex-col p-4 bg-primary rounded-md cursor-pointer gap-3">
          <p className="text-ellipsis hover:underline ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            quibusdam cupiditate vitae cumque, illo accusantium unde modi eaque
            ad laborum quas porro, quasi labore ipsa ea at magni consectetur
            nihil?
          </p>
          <span className="flex gap-3 items-center">
            <FaRegCommentAlt /> 0
          </span>
        </div>
      </div>
    </div>
  );
}
