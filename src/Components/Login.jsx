import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="py-5 px-1 md:py-20 md:px-20 justify-center text-center bg-blue-200">
      <div className="shadow bg-white md:m-20 m-10 py-0 md:py-10 rounded">
        <figure className=" justify-center text-center">
          <img
            src="Images/Logo.png"
            alt="logo"
            className="w-64 h-auto mx-auto px-5 py-0"
          />
        </figure>
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="m-4 md:m-10">
          <input
            type="text"
            placeholder="Enter your username"
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
            className="my-5 bg-[#0504AA] hover:bg-[#5a5af7] text-white py-2 px-4 rounded">
            <Link to="/task">Log In</Link>
          </button>
        </form>
        <p className="pb-3" >
          Don't have an Account?
          <Link to="/signup">
            <i className="text-[#0504AA]">Sign Up</i>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
