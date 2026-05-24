import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = ({ cartCount, toggleTheme, theme, user, logout }) => {
  return (
    <header className="header">

      <h2 className="logo">Chic & Cozy</h2>

      <nav className="nav">

        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Главная
        </NavLink>

        <NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>
          Каталог
        </NavLink>

        <NavLink to="/promotions" className={({ isActive }) => isActive ? "active" : ""}>
          Акции
        </NavLink>

        <NavLink to="/new-products" className={({ isActive }) => isActive ? "active" : ""}>
          Новинки
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          О нас
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
          🛒 {cartCount}
        </NavLink>

        {/* THEME BUTTON */}
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* AUTH SECTION */}
        {user ? (
          <>
            <Link to="/profile">👤 {user}</Link>
            <button onClick={logout} className="logout-btn">
              Выйти
            </button>
          </>
        ) : (
          <Link to="/login">Войти</Link>
        )}

      </nav>

    </header>
  );
};

export default Header;