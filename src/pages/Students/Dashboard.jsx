import Sidebar from "../../components/Sidebar";
import Search from "../../components/Search";
import { Outlet } from "react-router-dom";

import Heading from "../../components/Heading";
import ProfileBar from "../../components/ProfileBar";

export default function Dashboard() {
  return (
    <>
      <div className="w-screen h-screen p-8 flex justify-center items-center gap-10">
        <Sidebar active={"Dashboard"} />
        <div className="w-full h-full flex flex-col  gap-8">
          <div className="flex gap-10 justify-between px-10 items-center">
            <Search />
            <ProfileBar />
          </div>
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
