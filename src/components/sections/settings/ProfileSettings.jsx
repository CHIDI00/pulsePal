import { CiUser } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { ButtonOne } from "../../ui/Button";

export default function ProfileSettings() {
  const timezones = ["Eastern Time (EST)", "Central Time (CST)", "Mountain Time (MST)", "Pacific Time (PST)"];

  return (
    <div className="w-full shadow-lg bg-white rounded-2xl p-10">
      <div className="space-y-14">
        <div className="space-y-12">
          <h3 className="flex items-center text-5xl font-semibold text-nowrap gap-4">
            <CiUser className="text-blue-500 text-6xl" />
            profile information
          </h3>

          <div className="flex items-center gap-7">
            <div className="">
              <FaUserCircle className="w-40 h-40 p-10 text-white rounded-full cursor-pointer hover:scale-95 md:p-4 text-4xl bg-gradient-to-r from-green-500 to-green-400" />
            </div>
            <div className="space-y-5">
              <button className="border bg-gray-100 py-5 px-7 capitalize rounded-2xl cursor-pointer hover:scale-95 text-3xl font-semibold">
                change photo
              </button>
              <p className="text-3xl font-medium normal-case">JPG, PNG or GIF. Max size 2MB.</p>
            </div>
          </div>
        </div>

        <hr className="w-full h-px bg-gray-400" />

        <div className="w-full">
          <form className="w-full">
            <div className="grid !mb-16 sm:grid-cols-2 items-center grid-cols-1 gap-8">
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold">first name</label>
                <input
                  type="text"
                  name="text"
                  placeholder="Enter first name..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold">last name</label>
                <input
                  type="text"
                  name="text"
                  placeholder="Enter last name..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold"> email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold ">Timezone</label>
                <select
                  name="timezone"
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                >
                  {timezones.map((timezone, i) => (
                    <option key={i} value={timezone} className="text-[1.6rem] py-2">
                      {timezone}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <hr className="w-full h-px bg-gray-400" />

            <div className="grid !mt-8 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center w-full">
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold"> age</label>
                <input
                  type="age"
                  name="age"
                  placeholder="Enter your age..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold"> age</label>
                <input
                  type="age"
                  name="age"
                  placeholder="Enter your age..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[1.7rem] font-semibold"> height (cm)</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter your height..."
                  className="w-full h-[5.5rem] normal-case text-3xl font-medium rounded-2xl bg-gray-100 text-black pl-3 focus:border-green-300 border"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <ButtonOne name="save changes" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
