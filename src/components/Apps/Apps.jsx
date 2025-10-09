import { Link, useLoaderData } from "react-router";
import App from "./App";
import { useState } from "react";
import appError from "../../assets/App-Error.png";
import Loader from "../pages/loader";
import searchIcon from '../../assets/icons8-search-30.png'

const Apps = () => {
  const appsData = useLoaderData();
 const [loading, setLoading] = useState(false)
  const [searchApp, setSearchApp] = useState("");
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchApp.toLowerCase())
  );

  const handleSearchApp = (e) => {
    setSearchApp(e.target.value);
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-[#D2D2D2] md:px-10">
     
      <div className="text-center py-3">
        <h1 className="font-bold text-3xl my-2">Our All Applications</h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
        <div className="flex justify-between items-center mx-5 my-5 ">
          <p className="font-semibold text-[#001931]">
            ({filteredApps.length}) Apps Found
          </p>

   <label className="input border-2 border-gray-400 bg-[#D2D2D2] ">
  <img src={searchIcon} className="w-[15px] h-[15px]" alt="" />
  <input
    type="search"
    value={searchApp}            
    onChange={handleSearchApp} 
    required
    placeholder="Search Apps"
  />
</label>
        </div>
<div className="my-4">
   <Loader  loading={loading}></Loader>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
          {filteredApps.length > 0 ? (
            filteredApps.map((appData) => (
              <App appData={appData} key={appData.id}></App>
            ))
          ) : (
            <div className="relative left-[450px] text-center my-5 ">
              <img className=" " src={appError} alt="" />
              <p className="text-3xl my-3 text-gray-600 whitespace-nowrap">
                 APP NOT FOUND
              </p>
              <p>
                The App you are requesting is not found on our system. please
                try another apps
              </p>
             <Link to='/apps'> <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2 px-4 rounded-[5px] text-white mt-2">
                Go Back!
              </button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
