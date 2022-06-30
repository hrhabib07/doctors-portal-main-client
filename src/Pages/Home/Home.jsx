import React from "react";
import Banner from "./Banner";
import DentalCare from "./DentalCare";
import Info from "./Info";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalCare></DentalCare>
    </div>
  );
};

export default Home;