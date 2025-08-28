import { useState } from "react";
import Form from "./Form";
const CreateDiary = ({ showForm, setShowForm, cards, setCards }) => {
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="flex flex-1 w-full justify-center items-center pb-[3rem]">
      {!showForm ? (
        <div className="flex flex-col items-center">
          <img
            src="../public/diary-logo.png"
            alt="Diary"
            className="w-[40px] h-[40px]"
          />
          <p className="font-sans text-2xl text-center mt-[0.2rem] mb-[1rem]">
            Write what’s on your mind.
          </p>
          <button onClick={handleClick} className="btn btn-accent">
            Create Entry
          </button>
        </div>
      ) : (
        <Form
          showForm={showForm}
          setShowForm={setShowForm}
          cards={cards}
          setCards={setCards}
        />
      )}
    </div>
  );
};
export default CreateDiary;
