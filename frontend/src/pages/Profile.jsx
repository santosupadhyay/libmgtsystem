import React from "react";

const Profile = () => {
  const user = {
    name: "Santos Upadhyay",
    email: "santos@example.com",
    role: "Admin",
    address: "Bhimdatta-18, Kanchanpur",
    phone: "9800000000",
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Profile</h2>
      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
        {Object.entries(user).map(([key, value], idx) => (
          <p key={idx} className="text-gray-700"><span className="font-semibold capitalize">{key}:</span> {value}</p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
