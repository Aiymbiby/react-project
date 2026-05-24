import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>

      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(90deg, #1b8317, #e67e22)",
          color: "white",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center"
        }}
      >
        <h1 style={{ margin: 0 }}>О нас</h1>
        <p style={{ marginTop: "10px" }}>
          Chic & Cozy — стиль, комфорт и уверенность каждый день
        </p>
      </div>

      {/* NAV */}
      <div style={{ marginTop: "20px" }}>
        <Link to="info">Info</Link> |{" "}
        <Link to="team">Team</Link>
      </div>

      {/* TEXT */}
      <div style={{ marginTop: "25px", fontSize: "16px", lineHeight: "1.6" }}>
        <p>
          Chic & Cozy — это современный бренд женской одежды, созданный для девушек,
          которые хотят выглядеть стильно и чувствовать себя уверенно в любой ситуации.
        </p>
      </div>

      {/* FEATURES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "25px"
        }}
      >
        <div style={cardStyle}>👗 Качественная одежда</div>
        <div style={cardStyle}>💰 Доступные цены</div>
        <div style={cardStyle}>✨ Современный стиль</div>
        <div style={cardStyle}>🚚 Быстрая доставка</div>
      </div>

      {/* BUTTON */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setShowMore(!showMore)}
          style={{
            padding: "10px 18px",
            border: "none",
            background: "#1b8317",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {showMore ? "Скрыть" : "Подробнее"}
        </button>
      </div>

      {/* EXTRA TEXT */}
      {showMore && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "inherit",   // 🔥 FIX
            color: "inherit",        // 🔥 FIX
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        >
          Мы работаем с лучшими поставщиками и следим за модными тенденциями,
          чтобы каждая девушка чувствовала себя уверенно и стильно.
        </div>
      )}

      {/* ROUTES */}
      <Outlet />

      {/* CONTACTS */}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderTop: "1px solid #ddd"
        }}
      >
        <h3>Контакты</h3>
        <p>Email: chiccozy@gmail.com</p>
        <p>Телефон: +7 777 777 77 77</p>
      </div>

    </div>
  );
}

/* 🔥 FIX ДЛЯ КАРТОЧЕК */
const cardStyle = {
  background: "inherit",   // вместо white
  color: "inherit",        // 🔥 важно
  padding: "15px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  fontWeight: "bold",
  border: "1px solid #ddd"
};

export default About;