import { useState } from "react";
import { use } from "react";
import DisplayDiary from "./DisplayDiary";
const CreateDiary = () => {
  const [showDiary, setShowDiary] = useState(false);
  const handleClick = () => {
    setShowDiary(true);
  };
  return (
    <div className="flex w-full justify-center h-screen items-center">
      {!showDiary ? (
        <button onClick={handleClick} className="mb-[10vh] btn btn-primary">
          Create Diary
        </button>
      ) : (
        <DisplayDiary />
      )}
    </div>
  );
};
export default CreateDiary;
