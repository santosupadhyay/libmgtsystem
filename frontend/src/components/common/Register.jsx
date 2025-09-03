import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/slices/authSlice";

const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {loading, error} = useSelector((state)=>state.auth);

  const navigate = useNavigate();


  const handleRegister =async (e) => {
    e.preventDefault();
    dispatch(register({name, email, password}))
    navigate('/auth/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>
        
        {/* Name input */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email input */}
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password input */}
        <div className="mb-6 text-left">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {
          error && <p className="text-red-500 text-sm">{error}</p>
        }

        {/* Sign Up button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        onClick={handleRegister}
        >
          {
            loading ? <p>Registering up...</p> : <p>Register</p>
          }
        </button>

        {/* Login link */}
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
