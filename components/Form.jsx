import { useState } from "react";
import Card from "./Card.jsx";

function Form() {
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
      if (!form.description.trim()) throw new Error("Description is required");

      setSubmittedData(form);

      setForm({ title: "", date: "", image: "", description: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-[400px]">
      {!submitted ? (
        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
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
  );
}
export default Form;
