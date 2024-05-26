fetch ('https://hplussport.com/api/products?order=name')
.then(function (response) {
  return response.json();
})
.then(function(jsonData) {

  for(items in jsonData) {

      var productName = jsonData[items].name;  // all the products names
      var products = document.createElement('li');

      products.innerHTML =productName;
      document.body.appendChild(products);

      var productImg = jsonData[items].image;  // all the products images
      // create an html element to hold the API data for the images
      var image = document.createElement('img');
      image.setAttribute('src', productImg);
      document.body.appendChild(image);

  }








  // 5) Display all the products with the name and foto. inside in a for loop





   // ********************************
  // for (var i=0; i<jsonData.length; i++){
  //   var name=jsonData[i].name;
  //   var image=jsonData[i].image;
  //   console.log(name);
  //   console.log(image);

  //   // create an html element a list of products
  //   var product =document.createElement('li');
  //   product.innerHTML =name;
  //   document.body.appendChild(product);

  //   var img =document.createElement('img');
  //   img.src=image;
  //   document.body.appendChild(img);
  // }
  // ********************************
})


// 5) Display all the products with the name and foto. inside in a for loop
//
