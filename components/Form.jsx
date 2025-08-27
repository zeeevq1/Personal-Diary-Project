import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Form = ({
  showForm,
  setShowForm,
  setCards,
  card,
  setSelectedCardEdit,
}) => {
  const urlValidation = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const [form, setForm] = useState({
    title: "",
    date: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (card) {
      console.log("Editing card:", card.title);
      setForm({
        title: card.title,
        date: card.date,
        image: card.image,
        description: card.description,
      });
    } else {
      console.log("No card, creating new one");
      setForm({ title: "", date: "", image: "", description: "" });
    }
  }, [card]);

  const handleOnClick = () => {
    setSelectedCardEdit(null);
    setShowForm(!showForm);
  };
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
      if (card) {
        setCards((prev) => {
          const updatedCards = prev.map((currCard) =>
            currCard.id === card.id ? { ...currCard, ...form } : currCard
          );
          localStorage.setItem("cards", JSON.stringify(updatedCards));
          return updatedCards;
        });
        setSelectedCardEdit(null);

        toast.success("Entry updated successfully!");
      } else {
        const newCard = { ...form, id: crypto.randomUUID() };
        setCards((prev) => {
          const updateCards = [...prev, newCard];
          localStorage.setItem("cards", JSON.stringify(updateCards));
          return updateCards;
        });
        setForm({ title: "", date: "", image: "", description: "" });

        toast.success("Entry created successfully!");
      }
      setShowForm(!showForm);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>

          <div className="relative w-[50%] h-auto p-5 z-10">
            <button
              onClick={handleOnClick}
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

            <form
              className="p-7 bg-gray-100 rounded-xl shadow-lg"
              onSubmit={handleSubmit}
            >
              <label>
                Title
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  placeholder="Title"
                  className="input input-bordered w-full mt-[0.2rem] mb-[0.3rem]"
                  onChange={handleChange}
                />
              </label>

              <label>
                Date
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  className="input input-bordered w-full mt-[0.2rem] mb-[0.3rem]"
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
                  className="input input-bordered w-full mt-[0.2rem] mb-[0.3rem]"
                  onChange={handleChange}
                />
              </label>

              <label>
                Text
                <textarea
                  name="description"
                  value={form.description}
                  placeholder="Content"
                  className="textarea textarea-bordered w-full mt-[0.2rem] mb-[0.3rem]"
                  onChange={handleChange}
                />
              </label>

              <div className="flex justify-center items-center mt-6">
                <button type="submit" className="btn btn-primary py-3 px-16">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Form;
