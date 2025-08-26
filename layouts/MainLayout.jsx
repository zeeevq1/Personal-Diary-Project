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
      <main className="px-[0.5rem] py-[0.5rem]">
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
