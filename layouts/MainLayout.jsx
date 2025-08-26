import { CreateDiary, Header, DisplayDiary } from "../components";
import { ToastContainer } from "react-toastify";
import Form from "../components/Form";
import Card from "../components/Card";
import { useState } from "react";

const MainLayout = () => {
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  const [cards, setCards] = useState(savedCards);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className=" ">
      <Header
        showForm={showForm}
        setShowForm={setShowForm}
        setCards={setCards}
      />
      <main className="px-50 py-10">
        {Array.isArray(cards) && cards.length > 0 ? (
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
