import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-5 md:p-20 justify-center text-center bg-gray-100">
      <div className="shadow bg-white md:m-20 m-10 py-10 rounded">
        <figure className=" justify-center text-center">
          <img
            src="Images/Logo.png"
            alt="logo"
            className="w-64 h-auto mx-auto px-5 py-0"
          />
        </figure>
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="m-4 md:m-10">
          <input
            type="email"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-4 border border-gray-400 rounded py-2 px-3 mb-2 w-full"
          />
          <input
            type="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-4 border border-gray-400 rounded py-2 px-3 mb-2 w-full"
          />
          <button
            type="submit"
            className="my-10 bg-[#0504AA] hover:bg-[#5a5af7] text-white py-2 px-4 rounded">
            <Link to="/task">Sign up</Link>
          </button>
        </form>
        <p>
          Already have an Account?
          <Link to="/login">
            <i className="text-[#0504AA]">Log In</i>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
