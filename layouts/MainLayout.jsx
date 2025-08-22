import { CreateDiary, Header, DisplayDiary } from "../components";

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main>
        {/* <CreateDiary /> */}
        <DisplayDiary />
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
