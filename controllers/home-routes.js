const router = require('express').Router();
const { Category, Product } = require('../models');

router.get('/', (req, res) => {
  // find all categories
  Category.findAll()
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
// be sure to include its associated Products
});

module.exports = router;