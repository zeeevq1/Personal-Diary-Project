import Form from "./Form";
import { useState } from "react";

const DisplayDiary = ({ cards }) => {
  return (
    <div className="p-[1rem] w-full">
      {
        <div className="grid grid-cols-4 gap-[1rem] p-[1rem]">
          {cards.map((e) => (
            <div key={e.id} className="card bg-base-100 shadow-sm">
              <figure>
                <img src={e.image} alt={e.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{e.title}</h2>
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default DisplayDiary;
