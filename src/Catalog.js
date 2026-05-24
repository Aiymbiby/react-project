import React, { useState, useMemo } from "react";

const categories = {
  dresses: [
    {
      imgSrc: "https://sc04.alicdn.com/kf/H6260809f030f40dbb8615f7381cb80d8Y/Women's-Gold-Mermaid-Sequined-Evening-Party-Dress-Bling-Prom-Gown-with-Shoulder-Split-Long-Formal-Wear-for-Summer-Seasons.jpg",
      title: "Evening Mermaid Dress",
      price: "41900 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-s/6809450356.jpg",
      title: "Black Elegant Dress",
      price: "69900 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/originals/dc/66/8e/dc668e8f9ed037281f801b200090416b.webp?nii=t",
      title: "Black Elegant Dress",
      price: "59900 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/9a/31/f4/9a31f4b0df2ca07053862344bd200603.jpg",
      title: "Black Elegant Dress",
      price: "45000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/08/e6/d7/08e6d744d6c827336f84ab64aba11c87.jpg",
      title: "Black Elegant Dress",
      price: "40000 тг"
    },
    {
      imgSrc: "https://avatars.mds.yandex.net/i?id=b06884f0113fe9a9aa4ba63d146eaa67_l-5016797-images-thumbs&n=13",
      title: "Black Elegant Dress",
      price: "35900 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-n/8304566639.jpg",
      title: "Black Elegant Dress",
      price: "49900 тг"
    },
    {
      imgSrc: "https://basket-22.wbbasket.ru/vol3836/part383664/383664968/images/big/1.webp",
      title: "Black Elegant Dress",
      price: "39900 тг"
    },
    {
      imgSrc: "https://img-va.myshopline.com/image/store/1718096157131/P2507012205.jpeg?w=3262&h=4893&q=80",
      title: "Black Elegant Dress",
      price: "49900 тг"
    },
    {
      imgSrc: "https://www.missord.com/cdn/shop/files/XF250121_2.jpg?crop=region&crop_height=1785&crop_left=72&crop_top=0&crop_width=1195&v=1762329384&width=1340",
      title: "Black Elegant Dress",
      price: "49900 тг"
    },
  ],

  everyday: [
    {
      imgSrc: "https://i.pinimg.com/736x/b2/b2/48/b2b24851265c5c471db1ca5da692a913.jpg",
      title: "Women's Sports Set",
      price: "18900 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/6b/7a/d6/6b7ad6855e28380d9594a23330d8911c.jpg",
      title: "Casual Daily Set",
      price: "17500 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/f1/13/6e/f1136ec983952c225c0835373df1c18e.jpg",
      title: "Casual Daily Set",
      price: "20000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/9e/ef/42/9eef425ae42a652813186dd7cf09e3c2.jpg",
      title: "Casual Daily Set",
      price: "28000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/8c/57/c3/8c57c3f31685a1f1fad5bd82c5f8f396.jpg",
      title: "Casual Daily Set",
      price: "25000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/originals/ef/34/80/ef34806460ff5f25c8f07cda33ff6e7c.jpg",
      title: "Casual Daily Set",
      price: "18500 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/7c/0b/db/7c0bdbca26363810d10e3986e03294c4.jpg",
      title: "Casual Daily Set",
      price: "26500 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/1f/6f/af/1f6faf0afae17c9f106a1aa212fabff1.jpg",
      title: "Casual Daily Set",
      price: "37500 тг"
    },
  ],

  outerwear: [
    {
      imgSrc: "https://a.lmcdn.ru/pi/img600x866/M/P/MP002XW0F3UC_19153382_1_v1_2x.jpg",
      title: "Apricot Coat",
      price: "31000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/87693fdcbf66bb0a06212ae6945ba2de95c587bb_original.jpeg",
      title: "Winter Jacket",
      price: "35000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-6/8497378842.jpg",
      title: "Apricot Coat",
      price: "31000 тг"
    },
    {
      imgSrc: "https://basket-35.wbbasket.ru/vol7610/part761075/761075215/images/big/1.webp",
      title: "Apricot Coat",
      price: "31000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-9/8618973345.jpg",
      title: "Apricot Coat",
      price: "31000 тг"
    },
    {
      imgSrc: "https://a.lmcdn.ru/pi/img600x866/M/P/MP002XW0IVPS_20726196_1_v1_2x.jpg",
      title: "Apricot Coat",
      price: "31000 тг"
    },
    {
      imgSrc: "https://basket-19.wbbasket.ru/vol3072/part307257/307257963/images/big/1.webp",
      title: "Apricot Coat",
      price: "31000 тг"
    },
    {
      imgSrc: "https://n.cdn.cdek.shopping/images/shopping/GSppM2tdADrMKvW9.jpg?v=1",
      title: "Apricot Coat",
      price: "31000 тг"
    },
  ],

  skirts: [
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-d/8546994841.jpg",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
    {
      imgSrc: "https://avatars.mds.yandex.net/get-mpic/4362548/2a0000019c4068579bb4ff5231c99ce437bf/orig",
      title: "Mini Skirt",
      price: "14000 тг"
    },
    {
      imgSrc: "https://a.lmcdn.ru/product/M/P/MP002XW0FJJQ_23786887_1_v1.jpeg",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
    {
      imgSrc: "https://avatars.mds.yandex.net/get-mpic/10815509/2a00000193977d77e4ced6c8292cafa927db/orig",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/e7/6a/41/e76a4162e4d97aef8725d6d69fd73d6e.jpg",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
    {
      imgSrc: "https://i5.walmartimages.com/asr/9c5e2e74-9998-444d-aa7b-1110b45d0bd4.4a70a698c3b6c98030a938cd570aeff0.jpeg",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/bd72d6f78027563baddf422e8ec2d806488805ec_original.jpeg",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-g/7708989112.jpg",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-0/7128830412.jpg",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
    {
      imgSrc: "https://www.anna-kaci.com/cdn/shop/products/JN4130BRN-_20_1.jpg",
      title: "Elegant Skirt",
      price: "15000 тг"
    },
  ],

  trousers: [
    {
      imgSrc: "https://img-edg.joomcdn.net/4fd264c65a588d66f570c9f353f8891a291e97ea_original.jpeg",
      title: "Classic Trousers",
      price: "17000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/400025f7880782812a53ae8e7725294317ff1c73_original.jpeg",
      title: "Wide Pants",
      price: "18500 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-6/8615095134.jpg",
      title: "Classic Trousers",
      price: "17000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-p/7950727753.jpg",
      title: "Classic Trousers",
      price: "17000 тг"
    },
    {
      imgSrc: "https://basket-25.wbbasket.ru/vol4474/part447480/447480110/images/big/1.webp",
      title: "Classic Trousers",
      price: "17000 тг"
    },
    {
      imgSrc: "https://basket-10.wbbasket.ru/vol1567/part156727/156727673/images/big/1.webp",
      title: "Classic Trousers",
      price: "17000 тг"
    },
    {
      imgSrc: "https://basket-10.wbbasket.ru/vol1451/part145101/145101247/images/big/1.webp",
      title: "Classic Trousers",
      price: "17000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/f5f0741033884bbf646b1704f33884eb6c51438a_original.jpeg",
      title: "Classic Trousers",
      price: "17000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-c/7883892012.jpg",
      title: "Classic Trousers",
      price: "17000 тг"
    },
    {
      imgSrc: "https://img-edg.joomcdn.net/51f2e1da528fe35c1bbce1ce4007a328a5cb19d4_original.jpeg",
      title: "Classic Trousers",
      price: "17000 тг"
    },
  ],

  shoes: [
    {
      imgSrc: "https://usmall.ru/image/1291/86/33/5e1fc1bf9ec76e1a568edbc1b7ec78ce.jpeg",
      title: "Luxury Heels",
      price: "28000 тг"
    },
    {
      imgSrc: "https://n.cdn.cdek.shopping/images/shopping/q93KsZFDo5uvhdEy.jpg?v=1",
      title: "Stylish Boots",
      price: "32000 тг"
    },
    {
      imgSrc: "https://sc04.alicdn.com/kf/Hd99a94477a504981b6ac24cb720fa2c5v/Women-Pumps-Woman-Wedding-Shoes-Sexy-High-Heels-Casual-Shoes-Women-Fashion-Ladies-Shoes.jpg",
      title: "Stylish Boots",
      price: "32000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/originals/34/ac/f6/34acf61de0ec0040cfea19fdf0453d4a.png",
      title: "Dior White pumps",
      price: "32000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-b/7492759211.jpg",
      title: " SAINT LAURENT",
      price: "32000 тг"
    },
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-q/6704437118_8p1.jpg",
      title: "Туфли Louis Vuitton",
      price: "32000 тг"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/b1/c8/aa/b1c8aa922f3a4cb9e38b5ccacbee87f3.jpg",
      title: "Stylish Boots",
      price: "32000 тг"
    },
    {
      imgSrc: "https://n.cdn.cdek.shopping/images/shopping/caKAU5OkKL7jF4lD.webp?v=1",
      title: "Stylish Boots",
      price: "32000 тг"
    },
    {
      imgSrc: "https://static.ticimax.cloud/46743/uploads/urunresimleri/buyuk/dark-yesil-saten-tasli-kadin-topuklu-a-19-417.jpg",
      title: "Stylish Boots",
      price: "32000 тг"
    },
    {
      imgSrc: "https://img.joomcdn.net/96bc05a0b37d33fd39556908f431e1c8e9fc3188_original.jpeg",
      title: "Stylish Boots",
      price: "32000 тг"
    },
  ],

  accessories: [
    {
      imgSrc: "https://ir.ozone.ru/s3/multimedia-1-f/7679781483.jpg",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
    {
      imgSrc: "https://img-lcwaikiki.mncdn.com/mnpadding/1020/1360/ffffff/pim/productimages/20261/8517473/v1/l_20261-s69745z8-m0t_a2.jpg",
      title: "Luxury Bag",
      price: "39000 тг"
    },
    {
      imgSrc: "https://basket-38.wbbasket.ru/vol8605/part860533/860533811/images/big/1.webp",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
    {
      imgSrc: "https://basket-10.wbbasket.ru/vol1413/part141367/141367618/images/big/1.webp",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
    {
      imgSrc: "https://basket-38.wbbasket.ru/vol8727/part872719/872719434/images/big/1.webp",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
    {
      imgSrc: "https://static.cdn.oskelly.ru/product/4613604/item-b0950243-d4fa-4807-8131-860c6a5f95b2.jpg",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
    {
      imgSrc: "https://a.1stdibscdn.com/archivesE/upload/1701400/j_1309543/001_org_2__l.jpg",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
    {
      imgSrc: "https://img.joomcdn.net/52b79dfe2b9c865b08234146b77f7d7ea2db48fa_original.jpeg",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
    {
      imgSrc: "https://avatars.mds.yandex.net/i?id=8b32dd0cadcfb9fac9cd6b5ba33ae17e_l-4298102-images-thumbs&n=13",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
    {
      imgSrc: "https://sc04.alicdn.com/kf/H0ad2538635c4476292c96a97c5e28353X/239164735/H0ad2538635c4476292c96a97c5e28353X.jpg",
      title: "Glitter Accessory",
      price: "43000 тг"
    },
  ]
};

const Catalog = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState("dresses");

  const products = useMemo(() => {
    return categories[activeCategory] || [];
  }, [activeCategory]);

  return (
    <div className="catalog-page">

      {/* CATEGORY BUTTONS */}
      <div className="category-row">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="products">
        {products.map((item, idx) => (
          <div className="card" key={idx}>

            <img
              src={item.imgSrc}
              alt={item.title}
              className="card-img"
            />

            <div className="card-body">
              <h4>{item.title}</h4>

              {/* ✅ ДҰРЫС PRICE */}
              <p className="price">{item.price}</p>

              <button
                className="add-btn"
                onClick={() => addToCart(item)}
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

export default Catalog;