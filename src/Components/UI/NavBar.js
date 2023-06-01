import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  const scroller = (x) => {
    window.scrollBy(0, x);
  };
  
 //<svg
  return (
    <>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-gray-900" to="/">
          Home
        </Link>
        <Link className="mr-5 hover:text-gray-900" onClick={() => scroller(2000)}>
          Team
        </Link>
        <Link className="mr-5 hover:text-gray-900" onClick={() => scroller(2550)}>
          Contact
        </Link>
        <Link className="mr-5 hover:text-gray-900" to="/login">
          Login
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
