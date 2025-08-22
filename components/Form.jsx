import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    image: "",
    description: "",
  });
  const handleChange = (e) => {
    setForm((formVal) => ({ ...formVal, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(e.target.elements);

    console.log(e.target.elements);
    const { title, date, image, description, button } = e.target.elements;
    try {
      button.disabled = true;
      if (!title.value.trim()) throw new Error("Name is required");
      if (!date.value.trim()) throw new Error("Date is required");
      if (!image.value.trim()) throw new Error("Image is required");
      if (!description.value.trim()) throw new Error("Description is required");
      setForm({ title: "", date: "", image: "", description: "" });
    } catch (error) {
      alert(error.message);
    } finally {
      button.disabled = false;
    }
  };
  return (
    <div className="w-[400px]">
      <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
        <label htmlFor="">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            placeholder="Title"
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Date
          <input
            type="date"
            name="date"
            value={form.date}
            inputMode="numeric"
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Image
          <input
            name="image"
            id="image"
            type="text"
            value={form.image}
            placeholder="Image URL"
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Text
          <textarea
            name="description"
            id="description"
            value={form.description}
            placeholder="Content"
            className="textarea textarea-bordered w-full"
            onChange={handleChange}
          />
        </label>
        <button name="button" type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
