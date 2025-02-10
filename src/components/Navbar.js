import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-around text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/camera">Capture Sign</Link></li>
        <li><Link to="/results">Results</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
