import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div>
      <div className="hero w-full my-32 font-serif">
        <div className="card  w-full md:max-w-md max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link to='/messenger' className="form-control mt-6">
                <input
                  className="btn text-black  bg-cyan-300 border-0 rounded-lg hover:bg-[#8c52ff] hover:text-white hover:rounded-full"
                  type="submit"
                  value="Login"
                />
              </Link>
            </div>
          </form>
          <p className="text-center pb-2">
            New at Dakpion?{" "}
            <Link to="/register" className="text-blue-600 font-bold">
              SignUp
            </Link>
          </p>
          <h1 className="divider mx-5">OR</h1>
          <div className="btn-group btn-group-vertical mb-10 mx-6">
            <button className="btn text-black  bg-cyan-300 border-0 rounded-lg hover:bg-[#8c52ff] hover:text-white hover:rounded-full">
              <FcGoogle className="mr-3 w-8 h-8" /> Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
