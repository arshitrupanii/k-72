const Navbar = () => {
  return (
    <div className="w-screen fixed top-0 z-2 flex justify-between">
      <a href="/">
        <img className="p-2" src="logo.svg" alt="" />
      </a>

      <div className="w-[15vw] h-12 bg-black pr-10 cursor-pointer flex justify-end">
        <img src="menu.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
