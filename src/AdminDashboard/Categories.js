import React, { useState } from 'react';
import { FaTrashAlt, FaPlus } from "react-icons/fa";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burgers" },
    { id: 3, name: "Pasta" },
    { id: 4, name: "BBQ" },
    { id: 5, name: "Drinks" }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim() === "") return;
    setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
    setNewCategory("");
    setShowAddModal(false);
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const currentPageCategories = categories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold text-red-500 mb-4'>Categories List</h2>
      <button onClick={() => setShowAddModal(true)} className='flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'>
        <FaPlus className='mr-2' /> Add Category
      </button>

      <table className='w-full mt-4 bg-white border rounded-lg shadow-md'>
        <thead className='bg-red-500 text-white'>
          <tr>
            <th className='p-3 text-left'>Name</th>
            <th className='p-3 text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPageCategories.length < 1 ? (
            <tr>
              <td colSpan='2' className='text-center p-4'>No Categories Found, Please Add Some...</td>
            </tr>
          ) : (
            currentPageCategories.map((category) => (
              <tr key={category.id} className='border-b hover:bg-red-100'>
                <td className='p-3'>{category.name}</td>
                <td className='p-3 flex space-x-2'>
                  <button onClick={() => handleDeleteCategory(category.id)} className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition'>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className='flex justify-between mt-3'>
        <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition' disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center bg-red-500 text-white p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold">Add Category</h2>
              <button onClick={() => setShowAddModal(false)} className="text-white text-xl">&times;</button>
            </div>
            <div className="p-4">
              <label className="block text-gray-700 font-medium mb-2">Category Name</label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter category name"
              />
            </div>
            <div className="flex justify-end space-x-2 bg-gray-100 p-4 rounded-b-lg">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Close</button>
              <button onClick={handleAddCategory} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;