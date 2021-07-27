const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The /api/products endpoint

// get all products
router.get('/', (req, res) => {
    Product.findAll({
      include: [
        Category,
        {
          model: Tag,
          through: ProductTag
        }
      ]
    })
      .then(products => res.json(products))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one product
router.get('/:id', (req, res) => {
    Product.findOne({
      where: {
        id: req.params.id
      },
      include: [
        Category,
        {
          model: Tag,
          through: ProductTag
        }
      ]
    })
      .then(products => res.json(products))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;