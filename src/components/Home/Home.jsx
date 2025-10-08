import React from "react";
import Banner from "../Banner/Banner";
import StateSection from "../StateSection/StateSection";
import TopApps from "../TopApps/TopApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="bg-[#D2D2D2]">
      <Banner></Banner>
      <StateSection></StateSection>
      <TopApps data={data}></TopApps>
    </div>
  );
};

export default Home;
