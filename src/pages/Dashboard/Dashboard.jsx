import Sidebar from "../../components/Sidebar";
export default function Dashboard() {
  return (
    <>
      <div className="w-screen h-screen p-8 flex justify-center items-center gap-10">
        <Sidebar active={"Dashboard"}/>
        <div className="w-full h-full flex flex-col  gap-8">
          <h3 className="heading-1">Dashboard</h3>
          <div className="w-full h-full text-white rounded-lg bg-primary flex justify-center items-center">
              <p className="text-2xl">Data is not available yet</p>
          </div>
        </div>
      </div>
    </>
  );
}
