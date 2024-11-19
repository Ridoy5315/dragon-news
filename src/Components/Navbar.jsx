import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import navPhoto from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between pt-8 items-center">
      <div className="">{user && user.email}</div>
      <div className=" space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex gap-4 items-center">
        {
          user ? <div className="flex items-center border px-3 rounded-lg">
            <p>{user.displayName}</p>
            <div className="w-16">
            <img src={user.photoURL} alt="" />
            </div>
          </div>
            :
            <img className="rounded-full" src={navPhoto} alt="" />
        }
        {user && user.email ? (
          <button onClick={userSignOut} className="bg-black text-white px-7 py-3">Log Out</button>
        ) : (
          <Link to="/auth/login" className="bg-black text-white px-7 py-3">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
