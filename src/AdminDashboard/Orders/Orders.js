import React, { useState } from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa";

const UpdateForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
    // Yahan API call ya update logic laga sakte ho
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
    //   style={{ background: "var(--custom-gradient)" }}
    >
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#055554] mb-6">Update Account</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
            <FaEnvelope className="text-[#055554] mr-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50">
            <FaLock className="text-[#055554] mr-2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        <button
          onClick={handleUpdate}
          className="w-full bg-[#055554] text-white py-2 rounded hover:bg-[#044746] transition"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;
