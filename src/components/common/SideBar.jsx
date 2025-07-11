import { CiHeart } from "react-icons/ci";
import {
  IoBarChartOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { SiTarget } from "react-icons/si";
import { VscRobot } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen bg-gray-50 !px-3 z-10 shadow-xl w-fit section">
      <div className="flex flex-col justify-between h-full px-16 space-y-20 w-fit">
        <div className="flex items-center gap-10 px-10 py-6 bg-green-50 rounded-xl">
          <CiHeart className="p-2 text-white rounded-full text-7xl bg-gradient-to-tr from-green-500 to-green-200" />
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">welcome back!</h3>
            <p className="text-[1.7rem] normal-case font-medium">
              Alex Joshson
            </p>
          </div>
        </div>

        <nav className="flex flex-col w-full">
          <h4 className="mb-3 text-4xl font-semibold text-gray-600 uppercase">
            menu
          </h4>
          <ul className="flex flex-col gap-1">
            <NavLink to="/">
              <li className="flex items-center px-4 py-6 text-3xl font-medium cursor-pointer hover:font-bold gap-7 hover:bg-gray-200 hover:scale-95 rounded-xl">
                <IoHomeOutline className="text-4xl" /> dashboard
              </li>
            </NavLink>
            <NavLink to="assistant">
              <li className="flex items-center px-4 py-6 text-3xl font-medium cursor-pointer hover:font-bold gap-7 hover:bg-gray-200 hover:scale-95 rounded-xl">
                <VscRobot className="text-4xl" /> AI Assistant
              </li>
            </NavLink>

            <NavLink to="/settings">
              <li className="flex items-center px-4 py-6 text-3xl font-medium cursor-pointer hover:font-bold gap-7 hover:bg-gray-200 hover:scale-95 rounded-xl">
                <IoSettingsOutline className="text-4xl" /> settings
              </li>
            </NavLink>
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-10 py-6 px-7 bg-gradient-to-r from-purple-300 to-pink-300 float-end rounded-xl">
          <h3 className="text-3xl font-semibold text-gray-600">
            daily wellness goal
          </h3>
          <div className="flex items-center text-3xl font-semibold text-gray-600 gap-7">
            <SiTarget className="text-4xl" />
            7/10 completed
          </div>
        </div>
      </div>
    </div>
  );
}
