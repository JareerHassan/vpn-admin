import React, { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

export default function UserTable() {
  const [users, setUsers] = useState([
    { email: "admin@example.com", password: "admin123" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleAddUser = () => {
    if (formData.email && formData.password) {
      setUsers([...users, formData]);
      setFormData({ email: "", password: "" });
      setShowModal(false);
    }
  };

  const handleDelete = (index) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
  };

  return (
    <div className="min-h-screen  py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">User Management</h1>
          <button
            onClick={() => setShowModal(true)}
            style={{ background: "var(--custom-gradient)" }}
            className="mt-4 md:mt-0 text-white font-medium px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition-all"
          >
            <FaPlus className="inline mr-2" /> Add User
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-inner">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-200 uppercase text-xs font-semibold tracking-wider">
              <tr>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Password</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition duration-200"
                  >
                    <td className="px-6 py-4 font-medium">{user.email}</td>
                    <td className="px-6 py-4 font-medium">{user.password}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(index)}
               className="text-[#055554]"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center py-5 text-gray-500 italic"
                  >
                    No users added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
   {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-xl animate-fade-in">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
        onClick={() => setShowModal(false)}
      >
        &times;
      </button>

      {/* Modal Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add New User
      </h2>

      {/* Form Fields */}
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex justify-end space-x-2 pt-3">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleAddUser}
            style={{ background: "var(--custom-gradient)" }}
            className="text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 transition"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
