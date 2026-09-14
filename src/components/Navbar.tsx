import React from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className=" bg-base-100 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between  items-center py-3">
        <img src={Logo} alt="Logo" />

        <ul className="flex justify-between items-center gap-5">
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

        <div className="flex justify-between items-center gap-4">
          <h4>Sign In</h4>
          <button className="btn btn-primary rounded-full">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
