import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashBoardNavbar({ onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("food123");
    navigate("/admin/login");
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    onItemClick(item);
    setIsOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Menu Button */}
      <button
        className="fixed h-15 top-4 left-4 z-10 bg-white text-[#055554] p-3 rounded-lg md:hidden"
        onClick={handleToggle}
      >
        <i className="fas fa-bars text-xl"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-gray-800 shadow-lg transition-transform duration-300 ease-in-out z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-64`}
      >
        <div className="sidebar-header flex justify-between items-center p-4">
          <h6
            className="w-full text-center text-xl py-2 px-4 rounded-md text-white whitespace-nowrap"
            style={{
              background: "var(--custom-gradient)",
            }}
          >
            Admin Dashboard
          </h6>

          {/* Close Button (Only for mobile) */}
          <button
            className="text-gray-800 mb-2 bg-[#055554] rounded p-2 mx-2 text-white transition-colors md:hidden"
            onClick={handleToggle}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="list-unstyled p-4 space-y-3">
          {[
            { name: "dashboard", icon: "fa-chart-line", label: "Dashboard" },
            { name: "addproducts", icon: "fa-users", label: "User List" },
            { name: "products", icon: "fa-database", label: "Data Use" },
            { name: "orders", icon: "fa-cogs", label: "Settings" },
          ].map((item) => (
            <li
              key={item.name}
              className={`flex items-center mb-3 rounded-lg p-2 cursor-pointer transition-all duration-300 
                ${activeItem === item.name ? "text-white" : "text-white hover:text-white"}`}
              style={{
                background: "var(--custom-gradient)",
              }}
              onClick={() => handleItemClick(item.name)}
            >
              <i className={`me-2 fas ${item.icon} text-lg`}></i>
              <span className="text-lg font-medium">{item.label}</span>
            </li>
          ))}

          {/* Logout Button */}
          <li
            className="flex items-center mb-3 rounded-lg p-2 cursor-pointer transition-all duration-300 text-white hover:text-white"
            style={{
              background: "var(--custom-gradient)",
            }}
            onClick={handleLogout}
          >
            <i className="me-2 fas fa-sign-out-alt text-lg"></i>
            <span className="text-lg font-medium">Logout</span>
          </li>
        </ul>
      </div>

      {/* Background Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={handleToggle}
        ></div>
      )}
    </>
  );
}
