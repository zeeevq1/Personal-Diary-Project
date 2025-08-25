import { useState } from "react";
import Form from "./Form";
const CreateDiary = () => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="flex w-full justify-center h-screen items-center">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="mb-[10vh] btn btn-primary"
        >
          Create Diary
        </button>
      ) : (
        <Form />
      )}
    </div>
  );
};
export default CreateDiary;
