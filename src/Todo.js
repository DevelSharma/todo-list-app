import React, { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodos = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("Nothing is added to do.");
    } else {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleDeleteAllTodo = () => {
    setTodos([]);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <h1 className="text-center text-3xl font-semibold mb-5">Todo List</h1>
          <form onSubmit={handleAddTodos} className="mb-5">
            <input
              type="text"
              placeholder="Add new todo..."
              value={inputValue}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Add
            </button>
          </form>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center justify-between py-2">
                <span>{todo}</span>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {todos.length > 0 && (
            <button
              onClick={handleDeleteAllTodo}
              className="mt-5 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Delete All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};