const { Comment } = require('../models');

const commentdata = [
  {
    comment_title: 'Title 1',
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    product_id: 1
  },
  {
    comment_title: 'Title 2',
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    product_id: 2
  },
  {
    comment_title: 'Title 3',
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    product_id: 3
  },
  {
    comment_title: 'Title 4',
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 4,
    product_id: 4
  },
  {
    comment_title: 'Title 5',
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 5,
    product_id: 5
  },
  {
    comment_title: 'Title 6',
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 6,
    product_id: 6
  },
  {
    comment_title: 'Title 7',
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 7,
    product_id: 7
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;