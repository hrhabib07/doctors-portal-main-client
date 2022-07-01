import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState();
  const [treatment, setTreatment] = useState();
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-12">
      <h2 className="text-3xl text-secondary text-center pb-2">
        Available Appointment in {format(date, "PP")}
      </h2>

      <h2 className="text-2xl text-[gray] text-center">
        Please select a service.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 lg:mx-12 mt-12">
        {services?.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          >
            {" "}
          </Service>
        ))}
        {treatment && (
          <BookingModal
            date={date}
            setTreatment={setTreatment}
            treatment={treatment}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
