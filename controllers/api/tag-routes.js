const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get all tags
router.get('/', (req, res) => {
    Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
      .then((tags) => res.status(200).json(tags))
      .catch((err) => res.status(500).json(err));
});

// get one tag
router.get('/:id', (req, res) => {
    Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
      .then((tag) => res.status(200).json(tag))
      .catch((err) => res.status(404).json(err));
});

module.exports = router;