import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart, totalPrice } =
    useContext(CartContext);

  const handleOrder = () => {
    alert("Заказ успешно оформлен!");

    clearCart();
  };

  return (
    <div className="page">
      <h2>Оформление заказа</h2>

      {cart.length === 0 ? (
        <p>Корзина пустая</p>
      ) : (
        <>
          <div className="products">
            {cart.map((item, index) => (
              <div key={index} className="card">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="card-img"
                />

                <div className="card-body">
                  <h4>{item.title}</h4>

                  <p className="price">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="section">
            <h3>
              Итого:{" "}
              {totalPrice.toLocaleString()} тг
            </h3>

            <button
              className="hero-btn"
              onClick={handleOrder}
            >
              Подтвердить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;