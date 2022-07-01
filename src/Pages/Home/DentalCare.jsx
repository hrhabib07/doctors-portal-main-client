import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "./PrimaryButton";

const DentalCare = () => {
  return (
    <div className="hero min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={treatment}
          alt="treatment"
          className="max-w-sm rounded-lg shadow-2xl mr-0 lg:mr-12"
        />
        <div className="pl-0 lg:pl-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
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

export default DentalCare;
