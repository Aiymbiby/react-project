import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    const price = parseInt(item.price);
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const handleOrder = () => {
    alert("Заказ оформлен! 🎉");
    clearCart();
  };

  return (
    <div className="section">
      <h2>Оформление заказа</h2>

      <p>Товаров: {cart.length}</p>
      <h3>Итого: {total} тг</h3>

      <button onClick={handleOrder} className="hero-btn">
        Подтвердить заказ
      </button>
    </div>
  );
};

export default Checkout;