import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import github from '../../assets/icons8-github-logo-48.png'

const Navbar = () => {
  const [isSelected, setIsSelected] = useState("home");
  const handleIsSelected = (name) => {
    setIsSelected(name);
  };

  const links = (
    <>
      <Link to={"/"}>
        {" "}
        <li
          onClick={() => handleIsSelected("home")}
          className={`m-2 ${
            isSelected === "home"
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b border-[#9F62F2]"
              : "text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
          }`}
        >
          Home
        </li>
      </Link>
      <Link to={"/apps"}>
        {" "}
        <li
          onClick={() => handleIsSelected("apps")}
          className={`m-2 ${
            isSelected === "apps"
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b border-[#9F62F2]"
              : "text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
          }`}
        >
          Apps
        </li>
      </Link>
      <Link to={"/Installation"}>
        <li
          onClick={() => handleIsSelected("installations")}
          className={`m-2 ${
            isSelected === "installations"
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b border-[#9F62F2]"
              : "text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
          }`}
        >
          Installation
        </li>
      </Link>
    </>
  );

  return (
    <div className="max-w-[1200px] mx-auto py-3">
      <div className="navbar ">
        <div className="navbar-start flex gap-1">
          <Link to={"/"}>
            <img className="w-[30px] h-[30px]" src={logo} alt="" />
          </Link>
          <a className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent   font-bold text-xl">
            {" "}
            HERO.IO
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          <a
            href="https://github.com/Anika-sultana1"
            target="_blank"
            className="btn text-[white] bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-5 ml-2"
          >
            <img className="text-white w-[25px] h-[25px]" src={github} alt="" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
