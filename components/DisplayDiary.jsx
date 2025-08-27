import Form from "./Form";
import { useState } from "react";
import Card from "./Card";

const DisplayDiary = ({ cards, setCards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const onHandleMenuItemClick = (e, card) => {
    e.stopPropagation();
    setCards((prev) => {
      const updatedItems = prev.filter((i) => i.id !== card.id);
      localStorage.setItem("cards", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  return (
    <div className="p-[1rem] w-full">
      <div className="grid grid-cols-4 gap-[1.5rem] p-[1rem]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative card bg-white shadow-sm cursor-pointer border-2 border-[#00bfaa]"
            onClick={() => setSelectedCard(card)}
          >
            <figure>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[200px] "
              />
            </figure>
            <div className="flex flex-row justify-center items-center px-2">
              <div className="card-body px-2 py-3 text-gray-800">
                <h2 className="card-title">{card.title}</h2>
                <p>{new Date(card.date).toDateString()}</p>
              </div>
              <button
                onClick={(e) => onHandleMenuItemClick(e, card)}
                className="flex items-center gap-1 mr-2 px-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M9 6v12m6-12v12M4.5 6h15l-1.5 14.25a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5L4.5 6z"
                  />
                </svg>
              </button>
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
