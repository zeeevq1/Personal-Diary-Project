import { CreateDiary, Header, DisplayDiary } from "../components";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import card from "daisyui/components/card";

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
        cards={cards}
        setCards={setCards}
        hasCards={hasCards}
      />
      <main className="flex-1 flex flex-col">
        {hasCards ? (
          <DisplayDiary
            cards={cards}
            setCards={setCards}
            setShowForm={setShowForm}
            showForm={showForm}
          />
        ) : (
          <CreateDiary
            setShowForm={setShowForm}
            cards={cards}
            setCards={setCards}
          />
        )}
      </main>
      <footer></footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
