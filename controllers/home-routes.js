const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product, Tag, ProductTag, Category } = require('../models');

// get all products for shop-all


router.get('/', (req, res) => {

  Product.findAll({
    attributes: [
      'id',
      'product_name',
      'price',
      'stock',
      'price',
      'category_id',
      'img_url',
    ],
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag
      },
    ]
  })
    .then(dbProductData => {
      const products = dbProductData.map(products => products.get({ plain: true }));

      res.render('homepage', { 
        products,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single product
router.get('/product/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'product_name',
      'price',
      'stock',
      'price',
      'category_id',
      'img_url'
    ],
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag
      },
    ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }

      const product = dbProductData.get({ plain: true });

      res.render('single-product', {
        product,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get by category
router.get('/category/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [{
      model: Product,
      as: 'products',
      where: { category_id: req.params.id },
    }]
  })
  .then(dbCategoryData => {
    console.log(dbCategoryData);
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }

    const category = dbCategoryData.get({ plain: true });

    res.render('categories', {
      category,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;