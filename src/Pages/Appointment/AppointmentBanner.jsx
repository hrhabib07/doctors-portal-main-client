import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <img
          src={chair}
          alt="chair"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="pr-4">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
