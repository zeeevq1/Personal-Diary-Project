import { CreateDiary, Header, DisplayDiary } from "../components";
import { useState } from "react";

const MainLayout = () => {
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  const [cards, setCards] = useState(savedCards);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className=" ">
      <Header showForm={showForm} setShowForm={setShowForm} />
      <main className="px-50 py-10">
        {cards.length > 0 ? <DisplayDiary cards={cards} /> : <CreateDiary />}
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
