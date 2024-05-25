fetch ('https://hplussport.com/api/products?order=name')
.then(function (response) {
  return response.json();
})
.then(function(jsonData) {








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
