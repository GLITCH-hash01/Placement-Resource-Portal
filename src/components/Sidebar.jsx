import Logo from "../assets/PRPLogo.png";
import { MdLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { CgNotes } from "react-icons/cg";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { RiRoadMapLine } from "react-icons/ri";

export default function Sidebar({ active }) {
  const NavLinks = [
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      link: "/dashboard",
    },
    {
      name: "Notes",
      icon: <CgNotes />,
      link: "/notes",
    },
    {
      name: "Query",
      icon: <MdOutlineContactSupport />,
      link: "/events",
    },
    {
      name: "Events",
      icon: <MdEventNote />,
      link: "/academics",
    },
    {
      name: "Roadmap",
      icon: <RiRoadMapLine />,
      link: "/roadmap",
    },
  ];

  return (
    <>
      <div
        className=" w-19 h-[90vh] rounded-xl bg-white border-2 border-black flex flex-col justify-between items-center py-8 max-h-[1800px]"
        style={{ boxShadow: "0px 4px 0px 0px #9b9bff" }}>
        <img src={Logo} alt="" className="size-12" />
        <div className="flex w-full h-fit  flex-col gap-5 items-center">
          {NavLinks.map((item, index) => (
            <button
              key={index}
              className={
                "flex size-10  rounded-full  items-center justify-center text-2xl hover:bg-primary cursor-pointer transition  " +
                (active === item.name ? "bg-primary" : "bg-transparent")
              }>
              {item.icon}
            </button>
          ))}
        </div>
        <button
          className="flex size-10 bg-primary rounded-md cursor-pointer shadow-xl  items-center justify-center text-2xl"
          onClick={() => {
            window.location.href = "/login";
            localStorage.clear();
          }}>
          <MdLogout />
        </button>
      </div>
    </>
  );
}
