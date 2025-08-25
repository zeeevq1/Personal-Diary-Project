import { useState } from "react";
import Card from "./Card.jsx";
import { toast } from "react-toastify";

const urlValidation = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const Form = () => {
  const [showForm, setShowForm] = useState(true);
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  const [form, setForm] = useState({
    title: "",
    date: "",
    image: "",
    description: "",
  });

  const [submitted, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(e.target.elements);

    try {
      if (!form.title.trim()) throw new Error("Name is required");
      if (!form.date.trim()) throw new Error("Date is required");
      if (!form.image.trim()) throw new Error("Image is required");
      if (!urlValidation(form.image))
        throw new Error("Image must be a valid URL");
      if (!form.description.trim()) throw new Error("Description is required");

      const newCard = { ...form, id: crypto.randomUUID() };

      const updateCards = [...savedCards, newCard];
      localStorage.setItem("cards", JSON.stringify(updateCards));

      setSubmittedData(newCard);

      setForm({ title: "", date: "", image: "", description: "" });

      toast.success("Diary created successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative w-[50%] h-auto p-5 z-10">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition bg-red-500 hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {!submitted ? (
              <form
                className="p-7 bg-gray-100 border-2 rounded-xl shadow-lg"
                onSubmit={handleSubmit}
              >
                <label>
                  Title
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    placeholder="Title"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Date
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    className="input input-bordered w-full"
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Image
                  <input
                    type="text"
                    name="image"
                    value={form.image}
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Text
                  <textarea
                    name="description"
                    value={form.description}
                    placeholder="Content"
                    className="textarea textarea-bordered w-full"
                    onChange={handleChange}
                  />
                </label>

                <div className="flex justify-center items-center mt-6">
                  <button type="submit" className="btn btn-primary py-3 px-16">
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <Card
                title={submitted.title}
                date={submitted.date}
                image={submitted.image}
                description={submitted.description}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Form;
