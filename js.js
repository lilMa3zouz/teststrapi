const axios = require('axios').default;

axios.post('http://localhost:1337/archives', {
    title:"fefeff",
    description:"feeeeeeeeeeeeeeeeeeeeeefeeeeeeee",
    "numero":9,
    "pdf":[{"id":1,"name":"product.png","alternativeText":"","caption":"","width":960,"height":600,"formats":{"thumbnail":{"name":"thumbnail_product.png","hash":"thumbnail_product_a167be2171","ext":".png","mime":"image/png","width":245,"height":153,"size":11.51,"path":null,"url":"/uploads/thumbnail_product_a167be2171.png"},"medium":{"name":"medium_product.png","hash":"medium_product_a167be2171","ext":".png","mime":"image/png","width":750,"height":469,"size":59.36,"path":null,"url":"/uploads/medium_product_a167be2171.png"},"small":{"name":"small_product.png","hash":"small_product_a167be2171","ext":".png","mime":"image/png","width":500,"height":313,"size":32.56,"path":null,"url":"/uploads/small_product_a167be2171.png"}},"hash":"product_a167be2171","ext":".png","mime":"image/png","size":52.81,"url":"/uploads/product_a167be2171.png"}]
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });