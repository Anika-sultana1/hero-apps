import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp, removeFromStoredDB } from "../Utility/AddToDB";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const allAppsData = useLoaderData();
  const installedIds = getStoredApp();

  const installedAppsList = [];
  for (const app of allAppsData) {
    if (installedIds.includes(String(app.id))) {
      installedAppsList.push(app);
    }
  }

  const [installedApps, setInstalledApps] = useState(installedAppsList);
  const handleUnInstall = (id) => {
    removeFromStoredDB(id);
    const remainingApps = installedApps.filter(
      (app) => String(app.id) !== String(id)
    );
    setInstalledApps(remainingApps);

    toast.success("App successfully uninstalled!");
  };

  const [sort, setSort] = useState('');

const handleSort = (type) => {
    setSort(type)
    if(type === "High to Low"){
        const sortedHighToLow = [...installedApps].sort((a,b) => a.downloads - b.downloads)
           setInstalledApps(sortedHighToLow)
    }
      if(type === "Low to High"){
        const sortedLowToHigh = [...installedApps].sort((a,b) =>b.downloads - a.downloads)
           setInstalledApps(sortedLowToHigh)
    }
}


  return (
    <div className="bg-[#D2D2D2] px-10">
      <div className="text-center py-3">
        <h1 className="font-bold text-3xl my-2">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center px-15">
        <p className="font-semibold text-[24px]">
          {installedApps.length} Apps Found
        </p>

        <details className="dropdown">
          <summary className="btn m-1 text-[#627382]"> Sort By Size</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={()=> handleSort('High to Low')}>High to Low</a>
            </li>
            <li>
              <a onClick={()=> handleSort('Low to High')}>Low to High</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="px-15 grid gap-3 pt-3 pb-10">
        {installedApps.length > 0 ? (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="card card-dash bg-white w-full shadow-xl"
            >
              <div className="flex justify-between items-center p-3">
                <div>
                  <h2 className="card-title">{app.title}</h2>

                  <div className="flex gap-5 text-[14px]">
                    <div className="text-[#00D390] flex gap-2">
                      <img
                        className="w-[15px] h-[15px]"
                        src={downloadIcon}
                        alt=""
                      />
                      {app.downloads}
                    </div>
                    <div className="text-[#FF8811] flex gap-2">
                      <img
                        className="w-[15px] h-[15px] mt-0.5"
                        src={starIcon}
                        alt=""
                      />
                      {app.ratingAvg}
                    </div>
                    <p className="flex gap-2 text-[#627382]">{app.reviews}MB</p>
                  </div>
                </div>

                <button
                  onClick={() => handleUnInstall(app.id)}
                  className="text-white px-5 py-2 rounded-[5px] bg-[#46ac4f] hover:bg-[#3b9445] transition"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-xl text-gray-600">
            No apps installed. Please install some apps first!
          </p>
        )}
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Installation;
