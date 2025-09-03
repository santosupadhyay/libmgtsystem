import React from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/')
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        My Profile
      </h2>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-1 rounded-3xl shadow-xl">
        <div className="bg-white p-10 rounded-3xl flex flex-col items-center space-y-6">
          {/* Avatar */}
          <FaUserCircle className="text-gray-400 text-8xl" />

          {/* Name & Role */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
              <FaUserShield className="text-indigo-500" />
              <span>{user.role}</span>
            </p>
          </div>

          {/* Info Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl shadow">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p className="text-gray-700">{user.email}</p>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl shadow">
              <FaPhone className="text-green-500 text-xl" />
              <p className="text-gray-700">{user.phone}</p>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl shadow sm:col-span-2">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <p className="text-gray-700">{user.address}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8">
            <button className="px-6 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition">
              Edit Profile
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
            onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
