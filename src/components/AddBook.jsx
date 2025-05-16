// src/components/AddBook.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book submitted!");
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" required /><br /><br />
        <input type="text" placeholder="Author" required /><br /><br />
        <textarea placeholder="Description" required></textarea><br /><br />
        <input type="url" placeholder="Cover Image URL" required /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;