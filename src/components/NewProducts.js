import React, { useState } from "react";

const categoriesData = {
  Dresses: [
    {
      imgSrc:
        "https://sc04.alicdn.com/kf/H6260809f030f40dbb8615f7381cb80d8Y/Women's-Gold-Mermaid-Sequined-Evening-Party-Dress-Bling-Prom-Gown-with-Shoulder-Split-Long-Formal-Wear-for-Summer-Seasons.jpg",
      title: "Женское вечернее платье-русалка с пайетками",
      price: "21900 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-s/6809450356.jpg",
      title: "Платье Женский абрикосовый",
      price: "31000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-1/7448518369.jpg",
      title: "Платье Женский абрикосовый",
      price: "31000 тг"
    },
    {
      imgSrc: "https://avatars.mds.yandex.net/get-mpic/13851176/2a00000196fb11046f94337c60e005d9d044/orig",
      title: "Платье Женский абрикосовый",
      price: "31000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/225f0b86103ea24b38a1b3368d4f491ebd63fa7b_original.jpeg",
      title: "Платье Женский абрикосовый",
      price: "31000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/36/50/ce/3650ce8aa7b2079266adcdbdb76e1964.jpg",
      title: "Платье Женский абрикосовый",
      price: "31000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/5c/60/51/5c6051f50152d37ebb113c78d702b3f5.jpg",
      title: "Платье Женский абрикосовый",
      price: "31000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-y/7518736690.jpg",
      title: "Платье Женский абрикосовый",
      price: "31000 тг"
    },
  ],

  Everyday: [
    {
      imgSrc:
        "https://i.pinimg.com/736x/c9/05/8a/c9058a1341ce16cfa0983ae698d9f539.jpg",
      title: "Костюм классический",
      price: "25490 тг"
    },
    {
      imgSrc:
        "https://i.pinimg.com/736x/dd/84/52/dd8452466948e42f1154a2f49b238f3a.jpg",
      title: "Костюм классический",
      price: "25490 тг"
    },
    {
      imgSrc:
        "https://ir.ozone.ru/s3/multimedia-1-v/7134943135.jpg",
      title: "Костюм классический",
      price: "25490 тг"
    },
    {
      imgSrc:
        "https://cdn.shopozz.ru/images/shop/asos/1303/1303017/1303017129/big_1303017129_black_0.jpg",
      title: "Костюм классический",
      price: "25490 тг"
    },
    {
      imgSrc:
        "https://i.pinimg.com/736x/62/08/ad/6208ad35c7b39d2a4f2c6f6a768caead.jpg",
      title: "Костюм классический",
      price: "25490 тг"
    },
    {
      imgSrc:
        "https://i.pinimg.com/originals/78/a9/d2/78a9d29f176cec08bd4f9053b5824794.webp",
      title: "Костюм классический",
      price: "25490 тг"
    },
    {
      imgSrc:
        "https://i.pinimg.com/736x/91/d8/20/91d820bda4f382e5d8e274291434e936.jpg",
      title: "Костюм классический",
      price: "25490 тг"
    },
    {
      imgSrc:
        "https://i.pinimg.com/736x/a3/60/ae/a360ae959acffcfa6141029a10a6df30.jpg",
      title: "Костюм классический",
      price: "25490 тг"
    }
  ],

  Outerwear: [
    {
      imgSrc: "https://cdn1.ozone.ru/s3/multimedia-7/6569596327.jpg",
      title: "Пальто",
      price: "43000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-0/7245418932.jpg",
      title: "Пальто",
      price: "43000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-e/8183764094.jpg",
      title: "Пальто",
      price: "43000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/30a95d087d56068e5cca205ee4e250e37702121a_original.jpeg",
      title: "Пальто",
      price: "43000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-u/8305751730.jpg",
      title: "Пальто",
      price: "43000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/f5f61c04fd3a3845668d3297c989ce714da71b52_original.jpeg",
      title: "Пальто",
      price: "43000 тг"
    },
    {
      imgSrc: "https://basket-10.wbbasket.ru/vol1400/part140020/140020759/images/big/1.webp",
      title: "Пальто",
      price: "43000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/6a1fbf2d15470d4c8fa2736c4cd2131dbce468ad_original.jpeg",
      title: "Пальто",
      price: "43000 тг"
    },
  ]
};

const NewProducts = ({ addToCart }) => {
  const categoryNames = Object.keys(categoriesData);

  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);
  const [search, setSearch] = useState("");

  const allProducts = Object.values(categoriesData).flat();

  const filteredProducts = allProducts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const productsToShow = search
    ? filteredProducts
    : categoriesData[activeCategory];

  return (
    <div className="page">

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h1>✨ Новая коллекция</h1>
        <p style={{ color: "inherit", opacity: 0.7 }}>
          Свежие тренды сезона
        </p>
      </div>

      {/* SEARCH + CATEGORIES */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>

        <input
          type="text"
          placeholder="Поиск новинок..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />

        <div className="category-row">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSearch("");
              }}
              className={`category-btn ${
                activeCategory === cat ? "active" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* PRODUCTS */}
      <div className="products-grid">
        {productsToShow.length === 0 ? (
          <p>Ничего не найдено</p>
        ) : (
          productsToShow.map((prod, idx) => (
            <div key={idx} className="card">

              <img
                src={prod.imgSrc}
                alt={prod.title}
                className="card-img"
              />

              <div className="card-body">
                <h4>{prod.title}</h4>

                <p className="price">{prod.price}</p>

                <button onClick={() => addToCart(prod)}>
                  Добавить в корзину
                </button>
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default NewProducts;