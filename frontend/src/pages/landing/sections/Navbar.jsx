import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logo/Youtube_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar_container w-full py-5 fixed bg-transparent text-white z-50">
      <div className="navbar flex justify-between items-center lg:mx-16 sm:mx-6 mx-2">
        <div className="navbar_logo flex items-center gap-1 justify-center">
          <figure className="sm:w-12 w-8 ">
            <img src={Logo} alt="navbar logo" className="img" />
          </figure>
          <h2 className="sm:text-[22px] text-[16px] leading-6 font-bold ">
            CREATORSTUDIO
          </h2>
        </div>

        <div className="navbar_cta flex items-center sm:gap-8 gap-4 ">
          <Link
            to="/"
            className="navbar_logIn sm:text-[16px] text-[12px] font-medium leading-5"
          >
            Log In
          </Link>
          <Link to="/" className="btn_primary">
            Sign Up Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
