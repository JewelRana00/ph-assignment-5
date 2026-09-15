import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 sticky top-0 z-50">
      <div className="container mx-auto relative flex items-center justify-between px-4 lg:px-0  py-3">
        <button
          className="text-2xl lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <img
          src={Logo}
          alt="Logo"
          className="w-2 h-auto lg:w-auto lg:h-auto lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0"
        />

        <ul className="hidden lg:flex justify-between items-center gap-5">
          <li>
            <a href="#" className="text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-2 lg:gap-4">
          <h4 className="text-sm lg:text-base">Sign In</h4>
          <button className="btn btn-primary rounded-full btn-sm lg:btn-md">
            Sign Up
          </button>
        </div>

        {isMenuOpen && (
          <ul className="absolute left-0 top-full w-full bg-base-100 shadow-md p-5 flex flex-col gap-4 lg:hidden">
            <li>
              <a href="#" className="text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
