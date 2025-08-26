import { CreateDiary, Header, DisplayDiary } from "../components";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  const [cards, setCards] = useState(savedCards);
  const [showForm, setShowForm] = useState(false);
  const [hasCards, setHasCards] = useState(
    Array.isArray(cards) && cards.length > 0
  );

  useEffect(() => {
    setHasCards(cards.length > 0);
  }, [cards]);

  return (
    <div className="h-screen flex flex-col">
      <Header
        showForm={showForm}
        setShowForm={setShowForm}
        setCards={setCards}
        hasCards={hasCards}
      />
      <main className="flex-1 flex flex-col">
        {hasCards ? (
          <DisplayDiary cards={cards} />
        ) : (
          <CreateDiary setShowForm={setShowForm} setCards={setCards} />
        )}
      </main>
      <footer></footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
