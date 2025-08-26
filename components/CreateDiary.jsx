import { useState } from "react";
import Form from "./Form";
const CreateDiary = ({ showForm, setShowForm, setCards }) => {
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="flex flex-1 w-full justify-center items-center">
      {!showForm ? (
        <div className="flex flex-col items-center gap-4">
          <p className="font-sans text-2xl text-center">
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
          setCards={setCards}
        />
      )}
    </div>
  );
};
export default CreateDiary;
