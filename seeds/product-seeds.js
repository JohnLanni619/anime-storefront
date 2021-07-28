const { Product } = require('../models');

const productData = [
  {
    product_name: 'SAJU "100" JERSEY CREWNECK',
    price: 49.99,
    category_id: 1,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/IMG_9092_a53dc4a5-824b-4745-91f1-65eb20ad67e2_540x.jpg?v=1606894954',

  },
  {
    product_name: 'ORIGINAL OTAKU PILOT SHIRT',
    price: 29.99,
    category_id: 1,
    img_url: 'https://www.sajustreetwear.com/collections/apparel/products/otaku-pilot-t-shirt',
  },
  {
    product_name: 'EDO SAMURAI HOODIE',
    price: 49.99,
    category_id: 1,
    img_url: 'https://www.sajustreetwear.com/collections/apparel/products/edo-samurai-hoodie',
  },
  {
    product_name: 'ANDROID SHIRT',
    price: 29.99,
    category_id: 1,
    img_url: 'https://www.sajustreetwear.com/collections/apparel/products/android-t-shirt-in-black',
  },
  {
    product_name: 'BEAST MODE SHIRT',
    price: 29.99,
    category_id: 1,
    img_url: 'https://www.sajustreetwear.com/collections/apparel/products/beast-mode-t-shirt',
  },
  {
    product_name: 'POKE-SLAYERS ENAMEL PINS - FULL SET (4 PC)',
    price: 35.99,
    category_id: 4,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/fullsetpins_720x.jpg?v=1605572600',
  },
  {
    product_name: 'PILLARS ENAMEL PINS - FULL SET (9 PCS)',
    price: 104.99,
    category_id: 4,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/pillpinset_5b16b52a-9e79-4680-8b6c-1689d295025e_1080x.jpg?v=1605580477',
  },
  {
    product_name: 'YY ENAMEL PINS - FULL SET (7 PCS)',
    price: 82.99,
    category_id: 4,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/yynoflowers2_720x.jpg?v=1608597883',
  },
  {
    product_name: 'A:TLA SET III ENAMEL PINS - FULL SET 9 (3 PCS)',
    price: 34.99,
    category_id: 4,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/set3_720x.jpg?v=1604097032',
  },
  {
    product_name: 'POP STARS PRINT',
    price: 15.00,
    category_id: 3,
    img_url: 'https://www.sajustreetwear.com/products/popstar-print?_pos=1&_sid=c01e3036f&_ss=r',
  },
  {
    product_name: 'FAIRY PRINT',
    price: 15.00,
    category_id: 3,
    img_url: 'https://www.sajustreetwear.com/products/ft-print?_pos=1&_sid=1ceeb9c9d&_ss=r',
  },
  {
    product_name: 'HYPEBEAST ANDROID PRINT',
    price: 15.00,
    category_id: 3,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/27_b39aca26-42a1-4223-b9e3-17fc0befb7cc_720x.jpg?v=1606894970',
  },
  {
    product_name: 'PILLARS IN KYOTO PRINT',
    price: 20.00,
    category_id: 3,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/pillar_720x.jpg?v=1606893786',
  },
{
    product_name: 'KORRA METALLIC STICKERS',
    price: 35.99,
    category_id: 2,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/fsP1840304copy_720x.jpg?v=1627428280',
  },
  {
    product_name: 'SORCERERS METALLIC STICKERS',
    price: 33.99,
    category_id: 2,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/fullstickerset_720x.jpg?v=1627411723',
  },
  {
    product_name: 'SLAYERS METALLIC STICKERS',
    price: 27.99,
    category_id: 2,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/fsP1840286copy_720x.jpg?v=1627413265',
  },
  {
    product_name: 'YY METALLIC STICKERS',
    price: 29.99,
    category_id: 2,
    img_url: 'https://cdn.shopify.com/s/files/1/0070/4892/1139/products/yyfullset_720x.jpg?v=1617349199',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
