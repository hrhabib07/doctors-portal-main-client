import React from "react";

const Service = ({ service }) => {
  console.log(service);
  return (
    <div class="card bg-base-100 drop-shadow-md text-center ">
      <div class="card-body ">
        <h2 class="card-title text-secondary ">{service.name}</h2>
      </div>
    </div>
  );
};

export default Service;
