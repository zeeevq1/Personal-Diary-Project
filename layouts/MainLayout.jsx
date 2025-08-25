import { CreateDiary, Header, DisplayDiary } from "../components";
import Form from "../components/Form";
import Card from "../components/Card";

const MainLayout = () => {
  return (
    <div className=" ">
      <Header />
      <main className="px-50 py-10">
        <CreateDiary />
        {/* <DisplayDiary /> */}
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
