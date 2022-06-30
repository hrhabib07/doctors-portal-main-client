import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import DentalCare from "./DentalCare";
import Feathers from "./Feathers";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalCare></DentalCare>
      <Feathers></Feathers>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
