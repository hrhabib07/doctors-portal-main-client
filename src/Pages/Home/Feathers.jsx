import React from "react";
import PrimaryButton from "./PrimaryButton";
import doctor from "../../assets/images/doctor.png";
import bg from "../../assets/images/appointment.png";

const Feathers = () => {
  return (
    <div
      class="hero text-white px-12 "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div class="hero-content gap-0 p-0 flex-col lg:flex-row">
        <img
          src={doctor}
          alt="doctor"
          style={{
            marginTop: "-120px",
          }}
          class="hidden lg:block h-[500px] mr-0 lg:mr-12"
        />
        <div className="pl-0 lg:pl-12">
          <h2 className="text-secondary text-2xl font-bold">Appointment</h2>
          <h1 class="text-5xl font-bold">Make an appointment Today</h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Feathers;
