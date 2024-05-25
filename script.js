//  1 ) Make a request to the API,
//    Original url: https://hplussport.com/api/products
//    snippet -> fetchapi
//    Main link comming from the documentation

fetch ('https://hplussport.com/api/products?qty=2&order=name')
.then(function (response) {
  return response.json();
})
.then(function(jsonData) {
  console.log(jsonData);
})

// 2) Exercise, Add a paramter to the Endpoint.
//     params are also defined in the documentation
//     new url:https://hplussport.com/api/products?qty=2
//     tipicaly, ?param=value , is the method to requets the API a filter result
//     we can also use &param=value to add more filters.
//     https://hplussport.com/api/products?qty=2&order=name
//

//  3) Acces  expecific data in the response












/*  copilot code

let products = jsonData;
let productContainer = document.getElementById('products');
products.forEach(product => {
  let productContainer = document.createElement('div');
  productContainer.className = 'product';
  productContainer.innerHTML = `
  <img src="https://hplussport.com/images/${product.image}" alt="${product.name}">
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <h5>${product.price}</h5>
  `;
  productContainer.appendChild(productContainer);
}); */
