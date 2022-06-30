import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 my-5">
      <InfoCard
        bg="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
        cardDescription="10AM Every weekdays "
        img={clock}
      ></InfoCard>
      <InfoCard
        bg="bg-accent"
        cardTitle="Our Locations"
        cardDescription="Brooklyn, NY 10036, United States "
        img={marker}
      ></InfoCard>
      <InfoCard
        bg="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact us"
        cardDescription="+000 123 456789 "
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default info;
