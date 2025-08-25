import { useState } from "react";
import { use } from "react";
import DisplayDiary from "./DisplayDiary";
import Form from "./Form";
const CreateDiary = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };
  return (
    <div className="flex w-full justify-center h-screen items-center">
      {!showForm ? (
        <button onClick={handleClick} className="mb-[10vh] btn btn-primary">
          Create Diary
        </button>
      ) : (
        <Form />
      )}
    </div>
  );
};
export default CreateDiary;
