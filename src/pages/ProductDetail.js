import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getProductById } from "../services/productService";

import Loader from "../components/Loader";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const fetchProduct = async () => {
      try {
        setLoading(true);

        const data = await getProductById(id);

        if (mounted) {
          setProduct(data);
        }
      } catch {
        setError("Ошибка загрузки");
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  return (
    <div className="page">
      <h2>{product.title}</h2>

      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "250px",
          borderRadius: "12px",
        }}
      />

      <p>{product.description}</p>

      <h3>{product.price} $</h3>
    </div>
  );
};

export default ProductDetail;