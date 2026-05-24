import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import "./style.css";

import Header from "./components/Header";
import Cart from "./components/Cart";
import About from "./components/About";
import Promotions from "./components/Promotions";
import NewProducts from "./components/NewProducts";
import Catalog from "./Catalog";
import Home from "./Home";

import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import Admin from "./pages/Admin";
import Orders from "./components/Orders";
import Checkout from "./components/Checkout";

import { CartContext } from "./context/CartContext";
import { AuthContext } from "./context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const { user, logout } = useContext(AuthContext);

  const [theme, setTheme] = useState("light");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);

    setToast("✔ Добавлено в корзину");

    setTimeout(() => {
      setToast("");
    }, 1500);
  };

  return (
    <div className={`app ${theme}`}>
      <Header
        cartCount={cart.length}
        toggleTheme={toggleTheme}
        theme={theme}
        user={user}
        logout={logout}
      />

      {toast && <div className="toast">{toast}</div>}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/catalog"
          element={<Catalog addToCart={handleAddToCart} />}
        />

        <Route
          path="/promotions"
          element={<Promotions addToCart={handleAddToCart} />}
        />

        <Route
          path="/new-products"
          element={<NewProducts addToCart={handleAddToCart} />}
        />

        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/about/*" element={<About />} />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="orders" element={<Orders />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;