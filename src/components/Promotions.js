import React from "react";

const promotionsData = [
  {
    imgSrc:
      "https://ir.ozone.ru/s3/multimedia-1-d/8548114585.jpg",
    title: "Блузка Женский малиново-розовый",
    oldPrice: 27000,
    newPrice: 19900
  },
  {
    imgSrc:
      "https://avatars.mds.yandex.net/get-mpic/14273250/2a0000019726477d3b4acaf72251b2abb29a/orig",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-47/692/049/811/013/28/100043536868b0.jpg",
    title: "Жакет женский Viaville",
    oldPrice: 32000,
    newPrice: 24400
  },
  {
    imgSrc:
      "https://i.pinimg.com/736x/66/67/1c/66671c72ac1dd5334c1e6f51065e1814.jpg",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://a.lmcdn.ru/product/M/P/MP002XW177FH_24012862_1_v1.jpeg",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://img-edg.joomcdn.net/a907f6ddc6fc42064b824f5bd69f9e2df692e1b1_original.jpeg",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://ir.ozone.ru/s3/multimedia-1-g/8203144912.jpg",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://a.lmcdn.ru/product/M/P/MP002XW0WFXL_30683956_1_v4_2x.jpg",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://ir.ozone.ru/s3/multimedia-1-a/9232379218.jpg",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://ir.ozone.ru/s3/multimedia-1-9/7941926529.jpg",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://ir.ozone.ru/s3/multimedia-j/6821228215.jpg",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
  {
    imgSrc:
      "https://avatars.mds.yandex.net/i?id=a19bdad1a32f1b7ff17d79f01b9dabc3_l-4571053-images-thumbs&n=13",
    title: "Туфли JIMMY CHOO",
    oldPrice: 42000,
    newPrice: 34400
  },
];

const Promotions = ({ addToCart }) => {
  return (
    <div style={{ padding: "20px" }}>

      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(90deg, #1b8317, #e67e22)",
          color: "white",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "25px"
        }}
      >
        <h1>🔥 СКИДКИ ДО -50%</h1>
        <p>Лучшие предложения сезона</p>
      </div>

      {/* PRODUCTS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {promotionsData.map((item, idx) => (
          <div
            key={idx}
            style={{
              width: "300px",
              borderRadius: "12px",
              overflow: "hidden",
              background: "inherit",   // 🔥 FIX
              color: "inherit",        // 🔥 FIX
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              position: "relative"
            }}
          >

            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                background: "red",
                color: "white",
                padding: "5px 10px",
                fontSize: "12px",
                borderRadius: "6px"
              }}
            >
              SALE
            </div>

            <img
              src={item.imgSrc}
              alt={item.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "10px" }}>
              <h4>{item.title}</h4>

              <p style={{ textDecoration: "line-through", color: "#888" }}>
                {item.oldPrice} тг
              </p>

              <p style={{ color: "red", fontWeight: "bold" }}>
                {item.newPrice} тг
              </p>

              <button
                onClick={() => addToCart(item)}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#1b8317",
                  color: "white",
                  border: "none",
                  borderRadius: "6px"
                }}
              >
                В корзину
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;