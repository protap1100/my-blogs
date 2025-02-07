import { useState } from "react";
import { FaBars as Menu, FaTimes as Fa } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <Fa size={28} /> : <Menu size={28} />}
        </button>
        
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex md:items-center transition-all duration-300 ${open ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-lg p-4 md:p-0">
            <li>
              <a href="#" className="block py-2 md:py-0 hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 md:py-0 hover:text-gray-400">Posts</a>
            </li>
            <li>
              <a href="#" className="block py-2 md:py-0 hover:text-gray-400">Education</a>
            </li>
            <li>
              <a href="#" className="block py-2 md:py-0 hover:text-gray-400">Skills</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
