const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Apparel',
  },
  {
    category_name: 'Stickers',
  },
  {
    category_name: 'Prints',
  },
  {
    category_name: 'Enamel Pins',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
