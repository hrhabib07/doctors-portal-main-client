import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import PrimaryButton from "./PrimaryButton";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen px-12"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl " />
        <div className="p-6">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Doctors portal is the prevention, treatment, and management of
            illness and the preservation of mental and physical well-being
            through the services offered by the medical, nursing, and allied
            health professions.
          </p>
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
