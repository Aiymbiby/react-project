import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // сохраняем корзину в localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // добавить товар
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // удалить товар по индексу
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // очистить корзину
  const clearCart = () => {
    setCart([]);
  };

  // итоговая сумма
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(String(item.price).replace(/\D/g, ""));
    return sum + (price || 0);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};