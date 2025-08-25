import { useState } from "react";
import Card from "./Card.jsx";

const urlValidation = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

const Form = () => {
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
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="w-[50%] h-auto p-5">
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
  );
};
export default Form;
