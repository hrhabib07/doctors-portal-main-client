import React from "react";

const InfoCard = ({ img, bg, cardDescription, cardTitle }) => {
  return (
    <div class={`card card-side ${bg} shadow-xl text-white px-5`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default InfoCard;
