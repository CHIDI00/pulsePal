import { FaUserCircle } from "react-icons/fa";
import { RiParkingFill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="w-full !py-7 mx-auto bg-green-50 section-page shadow-xl">
      <div className="flex flex-wrap items-center justify-between w-full gap-10">
        <div className="flex items-center gap-5 rounded-xl">
          <RiParkingFill className="w-20 h-20 p-4 text-white rounded-full md:p-3 text-7xl bg-gradient-to-tr from-green-500 to-green-200" />
          <h3 className="text-6xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-blue-500 via-green-500 to-green-600 bg-clip-text">
            pulsePal
          </h3>
        </div>
        <FaUserCircle className="w-20 h-20 p-4 text-white rounded-full cursor-pointer hover:scale-95 md:p-4 text-7xl bg-gradient-to-r from-purple-500 to-pink-400" />
      </div>
    </div>
  );
}
