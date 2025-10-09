import React, { useState } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { useLoaderData, useParams } from "react-router";
import Rechart from "../Rechart/Rechart";
import { toast, ToastContainer } from "react-toastify";
import AppDescription from "../Description/AppDescription";
import { addToStoredDB } from "../Utility/AddToDB";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleApp;

const [installed, setInstalled] = useState(false)

const handleInstall = (id)=> {
  setInstalled(true)
   toast.success('Successfully Installed!')
 addToStoredDB(id);
}

const reverseRatings = [...ratings].reverse(); 

  return (
    
    <div className="bg-[#D2D2D2]">
      <div className="card card-side px-15 py-5 ">
        <figure>
          <img className="w-[350px] h-[350px] rounded-2xl" src={image} alt="" />
        </figure>
        <div className="card-body px-10">
          <h2 className="card-title">{title}</h2>
          <p>
            Developed by <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{companyName}</span>
          </p>
          <div className="divider"></div>
          <div className=" flex gap-20 ">
            <div className="flex flex-col  ">
              <img className="w-[30px] h-[30px]" src={downloadIcon} alt="" />
              <p className="text-[24px] my-3 text-[#001931]">Downloads</p>
              <p className="font-bold text-5xl">{downloads}</p>
            </div>
            <div className="flex flex-col  ">
              <img className="w-[30px] h-[30px]" src={starIcon} alt="" />
              <p className="text-[24px] my-3 text-[#001931]">Average Ratings</p>
              <p className="font-bold text-5xl">{ratingAvg}</p>
            </div>
            <div className="flex flex-col  ">
              <img className="w-[30px] h-[30px]" src={reviewIcon} alt="" />
              <p className="text-[24px] my-3 text-[#001931]">Total Reviews</p>
              <p className="font-bold text-5xl">{reviews}</p>
            </div>
          </div>
          <div className="my-3">
            <button onClick={()=>handleInstall(id)}
            disabled={installed} 
            
             className={`text-white px-5 py-2 rounded-[5px] ${
                installed ? "bg-gray-400 cursor-not-allowed"  : "bg-[#46ac4f]" 
              }`}>
                {installed ? "Installed" : `Install (${size}MB)`}
          
            
            </button>
          </div>
        </div>
      </div>
      <div className="divider pb-10 px-15"></div>
       <ToastContainer></ToastContainer>
      <div className=" pb-10 px-15">
        
          <Rechart reverseRatings = {reverseRatings}></Rechart>
         
      </div>
   
        <AppDescription description={description}></AppDescription>
     
    </div>

  );
};

export default AppDetails;
