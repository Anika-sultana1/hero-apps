import React from 'react';
import downloadIcon from "../../assets/icon-downloads.png";
import starIcon from "../../assets/icon-ratings.png";
import { Link } from 'react-router';

const App = ({appData}) => {

    const {id,image, title, downloads, ratingAvg} = appData;
    return (
   <Link to={`/AppDetails/${id}`}>
       <div className="card bg-base-100 shadow-sm">
             <figure>
               <img className="rounded-2xl p-3 w-[300px] h-[300px]" src={image} alt="" />
             </figure>
             <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <div className="flex justify-between items-end">
                 <div className="badge bg-[#F1F5E8] text-[#00D390] badge-outline flex gap-2">
                   <img className="w-[15px] h-[15px]" src={downloadIcon} alt="" /> {downloads}
                 </div>
                 <div className="badge bg-[#FFF0E1] text-[#FF8811] badge-outline flex gap-2">
                   <img className="w-[15px] h-[15px]" src={starIcon} alt="" /> {ratingAvg}
                 </div>
               </div>
             </div>
           </div>
   </Link>
    );
};

export default App;