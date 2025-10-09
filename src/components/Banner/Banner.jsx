import React from "react";
import playStore from '../../assets/google-play.png'
import appStore from '../../assets/app-store.png'

const Banner = () => {
  return (
    <div className="text-center ">
      <h1 className="font-bold text-5xl text-[#001931] pt-10">
        We Build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text  text-transparent">
          {" "}
          Productive{" "}
        </span>
         Apps
      </h1>
      <p className="text-[#627382] my-3">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />  Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center items-center">
        <button className="border rounded-[5px] p-2 px-4 font-semibold m-2">
         <a href="https://play.google.com/store/games?hl=en"
          target="_blank"
          className=" flex gap-2"> <img  className="w-[20px] h-[20px]" src={playStore} alt="" />
          Google Play</a>
        </button>
        <button
         className="border rounded-[5px] p-2 px-4 font-semibold m-2">
           <a href="https://www.apple.com/app-store/"
          target="_blank"
          className=" flex gap-2"
> <img className="w-[20px] h-[20px]" src={appStore} alt="" />
          App Store</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
