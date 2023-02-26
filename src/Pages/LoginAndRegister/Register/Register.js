import React from "react";
import { Link } from "react-router-dom";
import photo from "../../../assets/dakpion circle.png";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(email, password);
  };

  return (
    <div>
      <div className="hero w-full my-32 font-serif">
        <div className="card  w-full md:max-w-md max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered rounded-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter Your PhotoURL"
                className="input input-bordered rounded-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered rounded-xl"
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
                placeholder="Enter Your Password"
                className="input input-bordered rounded-xl"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-black  bg-cyan-300 border-0 rounded-lg hover:bg-[#8c52ff] hover:text-white hover:rounded-full"
                type="submit"
                value="SignUp"
              />
            </div>
          </form>
          <p className="text-center pb-10">
            Already have an account? {"  "}
            <Link to="/Login" className="text-blue-600 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
