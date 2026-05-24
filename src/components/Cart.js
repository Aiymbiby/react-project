import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } =
    useContext(CartContext);

  return (
    <div className="page">

      <h2>🛒 Корзина ({cart.length})</h2>

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
                  <p className="price">{item.price}</p>

                  <button onClick={() => removeFromCart(index)}>
                    Удалить
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* ИТОГО */}
          <div className="section">
            <h3>💰 Итого: {totalPrice.toLocaleString()} тг</h3>

            <button onClick={clearCart} className="btn-gray">
              Очистить
            </button>

            <button className="btn-green">
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;