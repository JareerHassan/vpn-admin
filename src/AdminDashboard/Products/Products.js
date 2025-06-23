import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

// Dummy user data with country and usage
const dummyUsers = [
  { id: 1, name: "Ali Raza", email: "ali@example.com", country: "Pakistan", usage: "400MB" },
  { id: 2, name: "Sara Khan", email: "sara@example.com", country: "UAE", usage: "312MB" },
  { id: 3, name: "Usman Tariq", email: "usman@example.com", country: "USA", usage: "494MB" },
];

export default function UserTablep() {
  const [users, setUsers] = useState(dummyUsers);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen p-6  flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700 text-b mb-6 text-start">User List</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left text-sm  font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Country</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Usage</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3  font-medium">{user.name}</td>
                  <td className="px-6 py-3 font-medium">{user.email}</td>
                  <td className="px-6 py-3 font-medium">{user.country}</td>
                  <td className="px-6 py-3 font-medium">{user.usage}</td>
                  <td className="px-6 py-3 text-right">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-[#055554]"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
