import Form from "./Form";
import Card from "./Card";
const names = [
  {
    id: 1,
    title: "dffsfgs",
    descritption: "fdfgg",
    imageUrl: "https://picsum.photos/id/10/2500/1667",
  },
  {
    id: 2,
    title: "frgrery",
    descritption: "uryuur",
    imageUrl: "https://picsum.photos/id/11/2500/1667",
  },
  {
    id: 3,
    title: "uiyotyry",
    descritption: "hrtutrurtu",
    imageUrl: "https://picsum.photos/id/12/2500/1667",
  },
  {
    id: 4,
    title: "uiyotyry",
    descritption: "hrtutrurtu",
    imageUrl: "https://picsum.photos/id/13/2500/1667",
  },
];

const DisplayDiary = () => {
  return (
    <div className="p-[1rem]">
      <div className="grid grid-cols-4 gap-[1rem] p-[1rem]">
        <Form />
        {names.map((e) => (
          <div key={e.id} className="card bg-base-100 shadow-sm">
            <figure>
              <img src={e.imageUrl} alt={e.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{e.title}</h2>
              <p>{e.descritption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayDiary;
