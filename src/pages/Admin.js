import React, { useEffect, useState } from "react";

import AddProductForm from "../components/AddProductForm";

import Loader from "../components/Loader";

import {
  getAdminProducts,
  createProduct,
  deleteProduct,
} from "../services/adminService";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);

      const data = await getAdminProducts();

      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const newProduct = await createProduct(product);

      setProducts((prev) => [...prev, newProduct]);
    } catch {
      alert("Ошибка создания");
    }
  };

  const removeProduct = async (id) => {
    try {
      await deleteProduct(id);

      setProducts((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch {
      alert("Ошибка удаления");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (products.length === 0) {
    return <h2>Нет товаров</h2>;
  }

  return (
    <div className="page">
      <h2>Admin Panel</h2>

      <AddProductForm addProduct={addProduct} />

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-body">
              <h3>{product.title}</h3>

              <p>{product.price} тг</p>

              <button
                onClick={() => removeProduct(product.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;