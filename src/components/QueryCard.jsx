import { FaRegCommentAlt } from "react-icons/fa";
import React from "react";
import profileimg from "../assets/images/profile.png";

export default function QueryCard({
  author,
  timestamp,
  desc,
  response_count,
  onClick,
  response = true,
}) {
  return (
    <div className="flex gap-3 w-full " onClick={onClick}>
      <div className="flex w-10 h-10 shrink-0 bg-primary rounded-full">
        <img src={profileimg} alt="" className="w-full h-full rounded-full" />
      </div>
      <div className="flex w-full h-fit p-3 bg-primary  rounded-md relative cursor-pointer">
        <div className="w-6 h-6 absolute top-2 -left-1 bg-primary  z-0  rotate-45"></div>
        <div className="w-full h-full flex flex-col gap-3 z-10">
          <span className="flex gap-2 items-center">
            <p className="text-xl font-semibold">{author}</p>
            <span className="w-2 h-2 rounded-full bg-gray-600"></span>
            <p className="text-sm">{timestamp}</p>
          </span>
          <p className="text-ellipsis  ">
            {desc}
          </p>
          {response && <div className="flex gap-3 items-center">
            <FaRegCommentAlt /> {response_count}
            </div>}
        </div>
      </div>
    </div>
  );
}
// export default function QueryCard({ desc, response_count, onClick }) {
//   return (
//     <div
//       className="flex flex-col p-4 bg-primary rounded-md cursor-pointer gap-3"
//       onClick={onClick}>
//       <p className="text-ellipsis hover:underline ">{desc}</p>
//       <span className="flex gap-3 items-center">
//         <FaRegCommentAlt /> {response_count}
//       </span>
//     </div>
//   );
// }
