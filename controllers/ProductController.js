//grab the Product model
var Product = require('../models/product');

//define crud operation

module.exports = {
  getAllProduct: function(params, callback){
    console.log('ProductController: getAllProduct()');
    Product.find(params, function(err, products){
      if(err){
        console.log("ProductController: getAllProduct(-): ERROR while getting product");
        callback(err, null);
        return;
      }
      console.log('products are ... suresh '+products)
      callback(null, products);
      console.log("ProductController: getAllProduct(-): PRODUCT retrieved successfuly!!");
    });
  },
  saveProduct: function(params, callback){
  console.log('ProductController: saveProduct(-)');
  Product.create(params, function(err, product){
    if(err){
      console.log("ProductController: saveProduct(-): ERROR while saving product");
      callback(err, null);
      return;
    }
    callback(null, product);
    console.log("ProductController: saveProduct(-): Product saved successfuly!!");
  });
}
}
