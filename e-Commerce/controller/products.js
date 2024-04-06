const products =[]
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    prods: products,
    path: "admin/add-product",
    pageTitle: "Add Product",
    formsCSS: true,
    activeAddProduct: true,
    productCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
    products.push({title : req.body.title})
    res.redirect('/');
  }

exports.getProducts = (req, res, next) => {
    res.render("shop", {
      prods: products,
      pageTitle: "My Shop",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }


