import React, { useState } from "react";
import { FaUsers, FaDatabase, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const DashboardHome = ({ onItemClick }) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
    onItemClick(item);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.div
        className="w-full max-w-4xl px-6 py-10 text-center rounded-lg shadow-lg"
        style={{
          background: "var(--custom-gradient)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Welcome Back, Admin!
        </motion.h1>

        <motion.p
          className="text-lg text-white mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Manage your platform with ease and control.
        </motion.p>

        {/* 3 Centered Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* User List */}
          <motion.div
            className="bg-white p-6 w-56 rounded-lg shadow-lg flex flex-col items-center text-[#055554] hover:scale-105 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => handleItemClick("addproducts")}
          >
            <FaUsers className="text-5xl mb-3" />
            <span className="text-md font-semibold">User List</span>
          </motion.div>

          {/* Data Use */}
          <motion.div
            className="bg-white p-6 w-56 rounded-lg shadow-lg flex flex-col items-center text-[#055554] hover:scale-105 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => handleItemClick("products")}
          >
            <FaDatabase className="text-5xl mb-3" />
            <span className="text-md font-semibold">Data Use</span>
          </motion.div>

          {/* Settings */}
          <motion.div
            className="bg-white p-6 w-56 rounded-lg shadow-lg flex flex-col items-center text-[#055554] hover:scale-105 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => handleItemClick("orders")}
          >
            <FaCogs className="text-5xl mb-3" />
            <span className="text-md font-semibold">Settings</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
