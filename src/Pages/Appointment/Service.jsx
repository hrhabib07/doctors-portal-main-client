import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl  ">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary mx-auto">{name}</h2>
        <p className="mt-4">
          {slots.length ? (
            <span> {slots[0]} </span>
          ) : (
            <span className="text-red-500"> Try another date </span>
          )}
        </p>
        <p className="mb-4">
          {slots.length} {slots.length < 1 ? "space" : "spaces"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            for="booking-modal"
            onClick={() => setTreatment(service)}
            className="btn  btn-secondary text-white modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
