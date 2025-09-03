import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/slices/authSlice'

const Login = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async(e) => {
    e.preventDefault();

    const result = await dispatch(login({email, password}))
    if(login.fulfilled.match(result)){
      navigate('/')
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
        
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
          error && <p className="text-red-500 tex-sm">{error}</p>
        }

        {/* Login button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        onClick={handleLogin}
        >
          {
            loading ? <p>Logging in ...</p> : <p>Login</p>
          }
        </button>

        {/* Signup link */}
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
