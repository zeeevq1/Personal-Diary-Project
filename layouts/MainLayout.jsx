import { CreateDiary, Header } from "../components";

const MainLayout = () => {
  return (
    <div className="flex flex-col w-screen">
      <Header />
      <main className="h-screen">
        <CreateDiary />
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
