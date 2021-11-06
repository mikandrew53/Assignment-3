const Product = require('./../models/product');
const Products = require('./../models/AllProducts');
const allProducts = new Products();


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}


exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, allProducts);
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = allProducts.getProducts(); 
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
}