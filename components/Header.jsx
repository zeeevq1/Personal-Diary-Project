const Header = () => {
  return (
    <header className="w-full bg-black py-1">
      <nav className="flex justify-between items-center">
        <img
          src="./assets/logo.png"
          className="w-[80px] h-[80px] ml-[1rem]"
        ></img>
        <button className="btn btn-success btn-sm mr-[1.9rem]">
          Create Diary
        </button>
      </nav>
    </header>
  );
};
export default Header;
