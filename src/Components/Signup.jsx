import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle sign-up form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-400 rounded py-2 px-3 mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Choose a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded py-2 px-3 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          <Link to="/task">Sign up</Link>
        </button>
      </form>
    </div>
  );
};

export default Signup;
