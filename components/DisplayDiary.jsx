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
            className="card bg-white shadow-sm cursor-pointer border-2 border-[#00bfaa]"
            onClick={() => setSelectedCard(e)}
          >
            <figure>
              <img src={e.image} alt={e.title} className="w-full h-[200px] " />
            </figure>
            <div className="card-body text-gray-800">
              <h2 className="card-title">{e.title}</h2>
              <p>{new Date(e.date).toDateString()}</p>
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
