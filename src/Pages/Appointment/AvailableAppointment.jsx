import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-12">
      <h2 className="text-3xl text-secondary text-center">
        Available Appointment in {format(date, "PP")}
      </h2>
    </div>
  );
};

export default AvailableAppointment;
