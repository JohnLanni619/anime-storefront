// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const User = require('./User');
const Comment = require('./Comment');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});
  
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    // as: 'product_tags',
    foreignKey: 'product_id'
});
  
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    // as: 'product_tags,
    foreignKey: 'tag_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
Comment.belongsTo(Product, {
    foreignKey: 'product_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Product.hasMany(Comment, {
    foreignKey: 'product_id'
});
  
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
    User,
    Comment
};