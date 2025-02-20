import React, { useEffect, useState } from "react";

import Profileimg from "../assets/images/profile.png";

export default function ProfileBar() {
  const [user, setUser] = useState({
    name: "John Doe",
    role: "student",
  });
  useEffect(() => {
    var userdetails = JSON.parse(localStorage.getItem("user"));
    if (userdetails != null) {
      setUser({
        name: userdetails.username,
        role: userdetails.role,
      });
    }
  }, []);
  return (
    <div className="w-full max-w-64 border h-13 rounded-md justify-between p-4 items-center flex bg-white  shadow-xl">
      <div className="flex text-md flex-col  justify-center">
        <p className="text-lg font-semibold leading-3">{user.name}</p>
        <p className="text-sm leading-4">{user.role}</p>
      </div>
      <img src={Profileimg} alt="" className="size-9" />
    </div>
  );
}
