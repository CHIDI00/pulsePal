import { CiHeart } from "react-icons/ci";

export default function SideBar() {
  return (
    <div className="w-full max-w-full max-h-screen px-12 shadow-xl section">
      <div className="px-20 space-y-20">
        <div className="flex items-center gap-10 p-6 bg-green rounded-xl">
          <CiHeart className="p-2 text-white rounded-full text-7xll bg-gradient-to-tr from-green to-greendark" />
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">welcome back</h3>
            <p className="text-[1.7rem] normal-case font-medium">Alex Joshson</p>
          </div>
        </div>
      </div>
    </div>
  );
}
