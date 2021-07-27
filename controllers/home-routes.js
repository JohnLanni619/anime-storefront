const router = require('express').Router();
const { Category, Product } = require('../models');

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;