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
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-xl shadow-lg w-[50%] p-6 z-50">
        {!submitted ? (
          <form className="p-5" onSubmit={handleSubmit}>
            <label>
              Title
              <input
                type="text"
                name="title"
                value={form.title}
                placeholder="Title"
                className="input input-bordered w-full mt-[0.2rem] mb-[0.5rem]"
                onChange={handleChange}
              />
            </label>

            <label>
              Date
              <input
                type="date"
                name="date"
                value={form.date}
                className="input input-bordered w-full mt-[0.2rem] mb-[0.5rem]"
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
                className="input input-bordered w-full mt-[0.2rem] mb-[0.5rem]"
                onChange={handleChange}
              />
            </label>

            <label>
              Text
              <textarea
                name="description"
                value={form.description}
                placeholder="Content"
                className="textarea textarea-bordered w-full mt-[0.2rem] mb-[0.5rem]"
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
