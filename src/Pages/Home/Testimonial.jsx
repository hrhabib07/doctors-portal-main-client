import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const Testimonial = () => {
  return (
    <div
      className="my-8 px-12"
      style={{
        backgroundImage: `url(${quote})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div>
        <h2 className="text-secondary text-xl font-bold">Testimonial</h2>
        <h2 className="text-2xl">What Our Patients Says</h2>
      </div>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="mt-8 flex items-center">
              <div className="avatar pr-4">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={people2} alt="people2" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Will D Lovely</h2>
                <h3 className="text-xl ">NYC</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="mt-8 flex items-center">
              <div className="avatar pr-4">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={people3} alt="people3" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Asma Khanom</h2>
                <h3 className="text-xl ">South China</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="mt-8 flex items-center">
              <div className="avatar pr-4">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={people1} alt="people1" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Winson Herry</h2>
                <h3 className="text-xl ">California</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
