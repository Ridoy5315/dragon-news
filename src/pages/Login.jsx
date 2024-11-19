import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userSignIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...err, login: err.code });
      });
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-white w-full max-w-lg shrink-0 p-10">
        <form onSubmit={handleLogIn} className="card-body">
          <h3 className="font-semibold text-3xl mx-auto">Login your account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.login && (
              <label className="label">
                <p>{error.login}</p>
              </label>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="mx-auto">
          Don’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
