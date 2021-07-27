const router = require('express').Router();
const sequelize = require('../config/connection');
const { Product } = require('../models');

// get all products for homepage
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
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
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

module.exports = router;