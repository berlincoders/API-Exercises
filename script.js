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


  var name=jsonData[0].name;
  console.log(name);

  // create an html element a list of products
  var product =document.createElement('li');
  product.innerHTML =name;
  document.body.appendChild(product);


})

// 2) Exercise, Add a paramter to the Endpoint.
//     params are also defined in the documentation
//     new url:https://hplussport.com/api/products?qty=2
//     tipicaly, ?param=value , is the method to requets the API a filter result
//     we can also use &param=value to add more filters.
//     https://hplussport.com/api/products?qty=2&order=name
//

//  3) Acces  expecific data in the response
//    Key values pairs for every product,id, description, image etc.
//      we access to the informatiuon using the dot notation
//    we need only the description to the first objet
//    the result is an Array, we need just the first element,(product)
//      var description =jsonData[0].description;

//fetch ('https://hplussport.com/api/products?qty=2&order=name')
//.then(function (response) {
//  return response.json();
//})
//.then(function(jsonData) {
//  console.log(jsonData);
//  var description =jsonData[0].description;
//  console.log(description);
//})

// 4) well , now we need to incorporate the data into our website
//     the firt thing is to do change to name, we wanted to collect the name
//    of the products.
//  4.1) create a new element, a list of products
//  4.2) asinge the name of the products, to the new list created
//  4.3) append the list to the body of the document
//

