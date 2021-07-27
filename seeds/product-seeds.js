const { Product } = require('../models');

const productData = [
  {
    product_name: 'SAJU "100" Jersey Crewneck',
    price: 49.99,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: 'ORIGINAL OTAKU PILOT SHIRT',
    price: 29.99,
    stock: 11,
    category_id: 1,
  },
  {
    product_name: 'EDO SAMURAI HOODIE',
    price: 49.99,
    stock: 33,
    category_id: 2,
  },
  {
    product_name: 'ANDROID SHIRT',
    price: 29.99,
    stock: 55,
    category_id: 1,
  },
  {
    product_name: 'BEAST MODE SHIRT',
    price: 29.99,
    stock: 22,
    category_id: 1,
  },
  {
    product_name: 'POKE-SLAYERS ENAMEL PINS - FULL SET (4 PC)',
    price: 35.99,
    stock: 11,
    category_id: 4,
  },
  {
    product_name: 'PILLARS ENAMEL PINS - FULL SET (9 PCS)',
    price: 104.99,
    stock: 33,
    category_id: 4,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/pillpinset_5b16b52a-9e79-4680-8b6c-1689d295025e_1080x.jpg?v=1605580477',
  },
  {
    product_name: 'YY ENAMEL PINS - FULL SET (7 PCS)',
    price: 82.99,
    stock: 55,
    category_id: 4,
  },
  {
    product_name: 'A:TLA SET III ENAMEL PINS - FULL SET 9 (3 PCS)',
    price: 34.99,
    stock: 22,
    category_id: 4,
  },
  {
    product_name: 'POP STARS PRINT',
    price: 15.00,
    stock: 11,
    category_id: 3,
  },
  {
    product_name: 'FAIRY PRINT',
    price: 15.00,
    stock: 33,
    category_id: 3,
  },
  {
    product_name: 'HYPEBEAST ANDROID PRINT',
    price: 15.00,
    stock: 55,
    category_id: 3,
  },
  {
    product_name: 'PILLARS IN KYOTO PRINT',
    price: 20.00,
    stock: 22,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
