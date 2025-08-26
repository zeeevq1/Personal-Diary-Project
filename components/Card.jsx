const Card = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl relative max-w-2xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition bg-red-500 hover:bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <figure className="w-[200px] flex-1/5">
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover rounded-l-lg"
          />
        </figure>

        <div className="card-body">
          <h1 className="card-title">{card.title}</h1>
          <h2 className="text-sm text-gray-500">{card.date}</h2>
          <p className="text-sm">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
