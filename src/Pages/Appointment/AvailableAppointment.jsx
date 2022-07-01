import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
    <div className="my-12">
      <h2 className="text-3xl text-secondary text-center">
        Available Appointment in {format(date, "PP")}
      </h2>
    </div>
  );
};

export default AvailableAppointment;
