import { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { FiActivity, FiUserCheck, FiShare2, FiDatabase, FiDownload, FiRefreshCw, FiTrash2, FiShield, FiLock, FiKey } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";

export default function PrivacySettings() {
  const [dataAnalyticsOn, setDataAnalyticsOn] = useState(true);
  const [personalizedInsightsOn, setPersonalizedInsightsOn] = useState(true);
  const [dataSharingOn, setDataSharingOn] = useState(true);

  return (
    <div className="w-full p-10 bg-white shadow-lg rounded-2xl">
      <div className="space-y-14">
        <h3 className="flex items-center gap-4 text-5xl font-semibold text-nowrap">
          <IoShieldOutline className="text-6xl text-purple-500" />
          Privacy & Security
        </h3>

        <div className="">
          {/* Data Analytics Section */}
          <div className="p-6 mb-8 rounded-lg bg-blue-50">
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center mb-4">
                  <FiActivity className="mr-5 text-4xl text-blue-600" />
                  <h2 className="text-4xl font-semibold text-gray-800">Data Analytics</h2>
                </div>
                <p className="text-3xl font-medium text-gray-600 normal-case ml-14">Help improve PulsePal with anonymous usage data</p>
              </div>

              <div className="">
                {dataAnalyticsOn ? (
                  <FaToggleOn className="text-5xl cursor-pointer" onClick={() => setDataAnalyticsOn(false)} />
                ) : (
                  <FaToggleOff className="text-5xl cursor-pointer" onClick={() => setDataAnalyticsOn(true)} />
                )}
              </div>
            </div>
          </div>

          {/* Personalized Insights Section */}
          <div className="p-6 mb-8 rounded-lg bg-purple-50">
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center mb-4">
                  <FiUserCheck className="mr-5 text-4xl text-purple-600" />
                  <h2 className="text-4xl font-semibold text-gray-800">Personalized Insights</h2>
                </div>
                <p className="text-3xl font-medium text-gray-600 normal-case ml-14">Use your data to provide personalized recommendations</p>
              </div>

              <div className="">
                {personalizedInsightsOn ? (
                  <FaToggleOn className="text-5xl cursor-pointer" onClick={() => setPersonalizedInsightsOn(false)} />
                ) : (
                  <FaToggleOff className="text-5xl cursor-pointer" onClick={() => setPersonalizedInsightsOn(true)} />
                )}
              </div>
            </div>
          </div>

          {/* Data Sharing Section */}
          <div className="p-6 mb-8 rounded-lg bg-green-50">
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center mb-4">
                  <FiShare2 className="mr-5 text-4xl text-green-600" />
                  <h2 className="text-4xl font-semibold text-gray-800">Data Sharing</h2>
                </div>
                <p className="text-3xl font-medium text-gray-600 normal-case ml-14">Share anonymized data with healthcare partners</p>
              </div>

              <div className="">
                {dataSharingOn ? (
                  <FaToggleOn className="text-5xl cursor-pointer" onClick={() => setDataSharingOn(false)} />
                ) : (
                  <FaToggleOff className="text-5xl cursor-pointer" onClick={() => setDataSharingOn(true)} />
                )}
              </div>
            </div>
          </div>

          {/* Data Management Section */}
          <div className="p-8 mb-12 rounded-lg bg-yellow-50">
            <div className="flex items-center mb-4">
              <FiDatabase className="mr-5 text-4xl text-yellow-600" />
              <h2 className="text-4xl font-semibold text-gray-800">Data Management</h2>
            </div>

            <div className="ml-10 space-y-7">
              <div className="ml-3 text-3xl font-medium p-4 bg-gray-300 rounded-3xl w-full h-[5rem] cursor-pointer hover:bg-gray-500 flex items-center">
                Download My Data <FiDownload className="inline ml-5" />
              </div>

              <div className="ml-3 text-3xl font-medium p-4 bg-gray-300 rounded-3xl w-full h-[5rem] cursor-pointer hover:bg-gray-500 flex items-center">
                Reset All Preferences <FiRefreshCw className="inline ml-5" />
              </div>

              <div className="ml-3 text-3xl font-medium p-4 bg-red-300 rounded-3xl w-full h-[5rem] text-white cursor-pointer hover:bg-red-500 flex items-center">
                Delete Account <FiTrash2 className="inline ml-5" />
              </div>
            </div>
          </div>

          <hr className="w-full h-px bg-gray-400" />

          <div className="pt-12">
            <div className="space-y-4">
              <div className="flex items-start">
                <FiShield className="mt-1 mr-5 text-4xl text-gray-500" />
                <div>
                  <h3 className="text-3xl font-semibold text-gray-800">Data Retention</h3>
                  <p className="text-gray-600 text-[1.7rem] font-medium normal-case">
                    Your health data is stored securely and retained for up to 2 years.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FiLock className="mt-1 mr-5 text-4xl text-gray-500" />
                <div>
                  <h3 className="text-3xl font-semibold text-gray-800">Encryption</h3>
                  <p className="text-gray-600 text-[1.7rem] font-medium normal-case">
                    All data is encrypted in transit and at rest using industry-standard protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FiKey className="mt-1 mr-5 text-4xl text-gray-500" />
                <div>
                  <h3 className="text-3xl font-semibold text-gray-800">Access</h3>
                  <p className="text-gray-600 text-[1.7rem] font-medium normal-case">
                    Only you and authorized healthcare providers you approve can access your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
