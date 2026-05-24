import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://theimpression.com/wp-content/uploads/2022/07/Fendi-Store-Scout-2022-the-impression-011-scaled.jpg')"
        }}
      >
        <div className="hero-content">
          <h1>CHIC & COZY</h1>
          <p>Стиль. Уверенность. Простота.</p>

          <Link to="/catalog" className="hero-btn">
            Смотреть коллекцию
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature">🚚 Быстрая доставка</div>
        <div className="feature">💳 Удобная оплата</div>
        <div className="feature">✨ Новые коллекции</div>
      </div>

      {/* COLLECTIONS */}
      <div className="section collections-bg">
        <h2>Коллекции</h2>

        <div className="collections">

          <Link to="/catalog" className="collection-card">
            <img
              src="https://i.pinimg.com/originals/f6/ec/9c/f6ec9c58ddd3972752f254d2e5316293.jpg"
              alt="dresses"
            />
            <span>Платья</span>
          </Link>

          <Link to="/new-products" className="collection-card">
            <img
              src="https://avatars.mds.yandex.net/i?id=d81e92cf25ffeb3077ff2e775dc9878e_l-8311862-images-thumbs&n=13"
              alt="new"
            />
            <span>Новинки</span>
          </Link>

          <Link to="/promotions" className="collection-card">
            <img
              src="http://gallery-grand.by/wp-content/uploads/2019/01/50-digital-1200x630-1.jpg"
              alt="sale"
            />
            <span>Скидки</span>
          </Link>

        </div>
      </div>

      {/* 🔥 POPULAR */}
      <div className="section">
        <h2>🔥 Популярное</h2>
        <p>Самые покупаемые товары сезона</p>
      </div>

      {/* 🏆 BESTSELLERS */}
      <div className="section">
        <h2>🏆 Бестселлеры</h2>
        <p>Товары, которые выбирают чаще всего</p>
      </div>

      {/* 💬 REVIEWS */}
      <div className="section">
        <h2>💬 Отзывы клиентов</h2>

        <div className="reviews">
          <div className="review">“Очень стильный сайт!” — Алия</div>
          <div className="review">“Быстрая доставка и классные вещи” — Дина</div>
          <div className="review">“Буду заказывать ещё!” — Айжан</div>
        </div>
      </div>

      {/* ℹ ABOUT */}
      <div className="section">
        <h2>О нас</h2>
        <p>
          Chic & Cozy — это интернет-магазин современной женской одежды.
          Мы создаём стильные образы для повседневной жизни и особых случаев.
        </p>
      </div>

    </div>
  );
}

export default Home;