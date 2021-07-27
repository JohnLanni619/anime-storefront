const router = require('express').Router();
const { Category, Product } = require('../../models');

// Get all categories
router.get('/', (req, res) => {
    Category.findAll({
      include: [Product],
    })
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
});

// Get one category
router.get('/:id', (req, res) => {
    Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
});

module.exports = router