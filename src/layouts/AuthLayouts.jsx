import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayouts = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="font-poppins w-10/12 mx-auto ">
        <header>
          <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

AuthLayouts.propTypes = {};

export default AuthLayouts;
