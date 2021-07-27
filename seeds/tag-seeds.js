const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'A:TLA',
  },
  {
    tag_name: 'PILLARS',
  },
  {
    tag_name: 'POKE SLAYERS',
  },
  {
    tag_name: 'YY',
  },
  {
    tag_name: 'SORCERERS',
  },
  {
    tag_name: 'SLAYERS',
  },
  {
    tag_name: 'GAANG',
  },
  {
    tag_name: 'HYPEBEAST',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
