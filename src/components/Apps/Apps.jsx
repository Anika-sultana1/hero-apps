import { useLoaderData } from "react-router";
import App from "./App";
import { useState } from "react";
import appError from '../../assets/App-Error.png'

const Apps = () => {
  const appsData = useLoaderData();

  const [searchApp, setSearchApp] = useState("");
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchApp.toLowerCase())
  );

  const handleSearchApp = (e) => {
    setSearchApp(e.target.value);
  };

  return (
    <div className="bg-[#D2D2D2] px-10">
      <div className="text-center py-3">
        <h1 className="font-bold text-3xl my-2">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
        <div className="flex justify-between items-center mx-5 my-5 ">
          <p className="font-semibold text-[#001931]">
            ({filteredApps.length}) Apps Found
          </p>

          <label
            onChange={handleSearchApp}
            className="input border-2 border-gray-400 bg-[#D2D2D2] "
          >
            <svg
              className="h-[1em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
          {filteredApps.length > 0 ? (
            filteredApps.map((appData) => (
                <App appData={appData} key={appData.id}></App>
           
            ))
          ) : (
         <div className="relative left-[450px] my-5 ">
               <img className=" " src={appError} alt="" />
            <p className="text-4xl my-3 text-gray-600">

              No App Found
            </p>
         </div>
          )}
        </div>
            </div>
      </div>
    
  );
};

export default Apps;
