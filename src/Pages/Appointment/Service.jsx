import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <div class="card-body ">
        <h2 class="card-title ">{name}</h2>
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
        <div class="card-actions justify-center">
          <button disabled={slots.length === 0} class="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;