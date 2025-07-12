import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../components/common/SideBar";
import MobileBottomNav from "../components/common/MobileBottomNav";

export default function AppLayout() {
  return (
    <div className="w-full m-auto max-w-[185rem]">
      <div className="flex items-start w-full">
        <div className="lg:flex-[2] xl:!block !hidden w-full">
          <SideBar />
        </div>
        <div className="lg:flex-[8] w-full">
          <Header />
          <main className="w-full h-full !py-10 !pb-36 bg-green-100 section-page">
            <Outlet />
          </main>

          <div className="flex lg:hidden">
            <MobileBottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}
