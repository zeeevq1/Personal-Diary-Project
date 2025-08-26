import Form from "./Form";
import { useState } from "react";
import Card from "./Card";

const DisplayDiary = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <div className="p-[1rem] w-full">
      <div className="grid grid-cols-4 gap-[1.5rem] p-[1rem]">
        {cards.map((e) => (
          <div
            key={e.id}
            className="card bg-base-100 shadow-sm cursor-pointer"
            onClick={() => setSelectedCard(e)}
          >
            <figure>
              <img src={e.image} alt={e.title} className="w-full h-[200px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{e.title}</h2>
              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <Card card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
};

export default DisplayDiary;
