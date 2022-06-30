import React from "react";
import fluorida from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const providedServices = [
    {
      serviceName: "Fluoride Treatment",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: fluorida,
    },
    {
      serviceName: "Cavity Filling",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: cavity,
    },
    {
      serviceName: "Teeth Whitening",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: whitening,
    },
  ];
  return (
    <div className="pt-12">
      <div className="text-center">
        <h2 className="text-primary font-bold">OUR SERVICES</h2>
        <h2 className="text-2xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
        {providedServices.map((sr) => (
          <Service service={sr}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
