import { CreateDiary, Header, DisplayDiary } from "../components";
import Form from "../components/Form";
import Card from "../components/Card";

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main>
        {/* <CreateDiary /> */}
        <DisplayDiary />
        <Form />
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
