import Form from "./Form";

const Header = ({ showForm, setShowForm, setCards, hasCards, cards }) => {
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <header className="w-full bg-black py-1">
      <nav className="flex justify-between items-center">
        <img
          src="./public/logo.png"
          className="w-[80px] h-[80px] ml-[1.2rem]"
        ></img>
        {hasCards && (
          <button
            onClick={handleClick}
            className="btn btn-accent btn-sm mr-[2.5rem] text-[0.9rem]"
          >
            Create Entry
          </button>
        )}
        {showForm && (
          <Form
            showForm={showForm}
            setShowForm={setShowForm}
            cards={cards}
            setCards={setCards}
          />
        )}
      </nav>
    </header>
  );
};
export default Header;
