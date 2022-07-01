import React from "react";

const InfoCard = ({ img, bg, cardDescription, cardTitle }) => {
  return (
    <div className={`card card-side ${bg} shadow-xl text-white px-5`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default InfoCard;
