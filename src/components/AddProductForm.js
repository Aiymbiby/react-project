import React, { useState } from "react";

const AddProductForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Название минимум 3 символа");
      return;
    }

    if (Number(price) <= 0) {
      setError("Цена должна быть больше 0");
      return;
    }

    addProduct({
      title,
      price,
    });

    setTitle("");
    setPrice("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="section">
      <input
        className="input"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="input"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <button type="submit">
        Добавить
      </button>
    </form>
  );
};

export default AddProductForm;