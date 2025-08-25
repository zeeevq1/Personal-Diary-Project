import { useState } from "react";
import Form from "./Form";

const Card = ({ title, date, image, description }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="w-full object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <div className="card-actions justify-end">
            <button className="bg-green-400">Checked</button>
            <button className="bg-red-400">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
