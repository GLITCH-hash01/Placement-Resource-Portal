import Sidebar from "../../components/Sidebar";
import Search from "../../components/Search";
import searchicon from "../../assets/images/searchicon.png";
export default function Dashboard() {
  return (
    <>
      <div className="w-screen h-screen p-8 flex justify-center items-center gap-10">
        <Sidebar active={"Dashboard"} />
        <div className="w-full h-full flex flex-col  gap-8">
          <h3 className="heading-1">Dashboard</h3>
          <div className="w-full h-full text-black rounded-lg bg-white  flex justify-center items-center">
            <p className="text-3xl text-primary opacity-90">Data is not available yet</p>
          </div>
        </div>
      </div>
    </>
  );
}
