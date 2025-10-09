import React from "react";
import logo from "../../assets/logo.png";

const Loader = ({ loading }) => {
  return (
    loading && (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          zIndex: 9999,
        }}
      >
        <h1 className="text-5xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent flex gap-1 font-bold ">
          L{" "}
          <span>
            <img
              className="w-[100px] h-[100px] mb-2 animate-spin"
              src={logo}
              alt=""
            />
          </span>{" "}
          ading
        </h1>
      </div>
    )
  );
};

export default Loader;
