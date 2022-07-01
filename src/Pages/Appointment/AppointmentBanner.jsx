import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse gap-12">
        <img src={chair} alt="chair" class="max-w-sm rounded-lg shadow-2xl" />
        <div className="pr-4">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You have selected {format(date, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
