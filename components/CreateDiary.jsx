import { useState } from "react";
import Form from "./Form";
const CreateDiary = ({ showForm, setShowForm, setCards }) => {
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="flex w-full justify-center h-screen items-center">
      {!showForm ? (
        <button onClick={handleClick} className="mb-[10vh] btn btn-primary">
          Create Diary
        </button>
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
