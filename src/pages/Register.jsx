import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = (props) => {
  const [error, setError ] = useState({});
  const navigate = useNavigate();


  const {createNewUser, setUser, userUpdateProfile} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get('name');
    if(name.length < 5){
      return setError({...error, name: 'Name should be al least 5 character'})
    }
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');

    // console.log(name, photo, email, password)

    createNewUser(email, password)
    .then(result => {
      setUser(result.user);

      userUpdateProfile({displayName: name, photoURL: photo})
      .then(()=> {
        navigate('/')
      })
      .catch(err => {console.log('ERROR:', err.message)})
    })
    .catch(err => {console.log(err.message)})
    
  }
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-white w-full max-w-lg shrink-0 p-10">
        <form onSubmit={handleRegister} className="card-body">
          <h3 className="font-semibold text-3xl mx-auto">Register your account</h3>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="test"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {
            error.name && <p>{error.name}</p>
          }
          {/* photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="test"
              name="photo"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
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

          {/* password */}
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="mx-auto">Already Have An Account ? <Link to='/auth/login' className="text-red-500">Log in</Link></p>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
