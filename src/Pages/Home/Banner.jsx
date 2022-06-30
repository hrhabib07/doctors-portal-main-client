import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import PrimaryButton from "./PrimaryButton";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen px-12"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl " />
        <div class="p-6">
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
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
