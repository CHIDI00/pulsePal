import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../components/common/SideBar";

export default function AppLayout() {
  return (
    <div className="w-full m-auto max-w-[185rem]">
      <div className="flex items-start w-full">
        <div className="md:flex-[2] lg:flex hidden  w-full">
          <SideBar />
        </div>
        <div className="md:flex-[8] w-full">
          <Header />
          <main className="w-full h-full !pt-20 bg-green-100 section-page">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
