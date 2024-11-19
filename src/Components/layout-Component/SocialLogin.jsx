import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = (props) => {
  return (
    <div>
      <p className="font-bold text-xl">Login With</p>
      <div className="*:w-full flex flex-col gap-2 mt-4">
        <button className="btn"><FaGoogle></FaGoogle> Login with Google</button>
        <button className="btn"><FaGithub></FaGithub>Login with Github</button>
      </div>
    </div>
  );
};

SocialLogin.propTypes = {};

export default SocialLogin;
