//Firebase
var firebaseConfig = {
    apiKey: "AIzaSyADaS2xQsnpqPL6NzxEF4eu08BWaE69wPc",
    authDomain: "futbolmania-2b313.firebaseapp.com",
    databaseURL: "https://futbolmania-2b313.firebaseio.com",
    projectId: "futbolmania-2b313",
    storageBucket: "futbolmania-2b313.appspot.com",
    messagingSenderId: "12192940854",
    appId: "1:12192940854:web:f4f1e3c997ef74a18c6997"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //GLOBAL
  var products=[];
  var cartItems=[];
  var cart_n= document.getElementById("cart_n");
  //DIVS
  var fruitDiv=document.getElementById("fruitDiv");
  var promotionDiv=document.getElementById("promotionDiv");
  var boxDiv=document.getElementById("boxDiv");
  //information
  var PRODUCT=[
      {name:'Producto #1', price:1},
      {name:'Producto #2', price:2},
      {name:'Producto #3', price:3},
      {name:'Producto #4', price:4},
  ];
  var PROMO=[
      {name:'Promoción', price:10}
  ];
  var BOX=[
      {name:'Caja FutbolMania', price:20}
  ];
  //HTML
  function HTMLproductsProduct(con){
      let URL = `img/products${con}.jpeg`;
      let btn = `btnPRODUCT${con}`;
      return `
      <div class="col-md-6">
      <div class="card mb-4 shadow-sm">
      <div class="cardImg">
      <img class="card-img-top" style="height:19rem;" src="${URL}" alt="Card Image">
      </div>
      <div class="card-body">
      <i style="color:orange;" class="fa fa-star"></i>
      <i style="color:orange;" class="fa fa-star"></i>
      <i style="color:orange;" class="fa fa-star"></i>
      <i style="color:orange;" class="fa fa-star"></i>
      <i style="color:orange;" class="fa fa-star"></i>
      <p class="card-text">${PRODUCT[con-1].name}</p>
      <p class="card-text">Price:$${PRODUCT[con-1].price}.00</p>
      <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
      <button type="button" onclick="cart2('${PRODUCT[con-1].name}','${PRODUCT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
      <a style="color:inherit;" href="cart.html">Comprar</a></button>
      <button id="${btn}" type="button" onclick="cart('${PRODUCT[con-1].name}','${PRODUCT[con-1].price}','${URL}','${con}','${btn}')"
      class="btn btn-sm btn-outline-secondary">Añadir</button>
      </div>
      <small class="text-muted">Envio gratis</small>
      </div>
      </div>
      </div>

      </div>
      `
  }
  function HTMLpromotionProduct(){
      let URL= `img/carousel/slide1.jpg`;
      let btn = `btnpromotion`;
      return `
      <div class="row featurette">
      <div class="col-md-7">
      <h2 id="Promotions" style="padding-top:70px;">Promociones</h2>
      <p class="lead">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, provident cupiditate amet maxime autem, quas aspernatur.
      </p>
      <h3>$${PROMO[0].price}.00</h3>
      <button type="button" onclick="cart2('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="cart.html">Comprar</a></button>
      <button id="${btn}" type="button" onclick="cart('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')"
      class="btn btn-sm btn-outline-secondary">Añadir</button>
      </div>
      <div class="col-md-5">
      <img src="img/carousel/slide1.jpg" width="400" height="500">
      </div>
      </div>
      `
  }
  function HTMLproductsboxProduct(){
    let URL= `img/carousel/slide3.jpg`;
    let btn = `btnBOX`;
    return `
    <div class="row featurette">
    <div class="col-md-7 order-md-2">
    <h2 id="Box" style="padding-top:70px;">Caja FutbolMania</h2>
    <p class="lead">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, provident cupiditate amet maxime autem, quas aspernatur.
    </p>
    <h3>$${BOX[0].price}.00</h3>
    <button type="button" onclick="cart2('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="cart.html">Comprar</a></button>
    <button id="${btn}" type="button" onclick="cart('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}') "class="btn btn-sm btn-outline-secondary">Añadir</button>
    </div>
    <div class="col-md-5 order-md-1">
    <img src="img/carousel/slide3.jpg" width="400" height="300">
    </div>
    </div>
    `
}

  //ANIMATION
  function animation(){
      const toast=swal.mixin({
          toast:true,
          position:'top-end',
          showConfirmButton:false,
          timer:1000
      });
      toast({
          type:'success',
          title: 'Añadido al carrito'
      })
    }
    
      //CART FUNCTIONS
      function cart(name,price,url,con,btncart){
          var item={
              name:name,
              price:price,
              url:url
          }
      cartItems.push(item);
      let storage = JSON.parse(localStorage.getItem("cart"));
      if (storage===null) {
          products.push(item);
          localStorage.setItem("cart",JSON.stringify(products));
        } else{
            products= JSON.parse(localStorage.getItem("cart"));
            products.push(item);
            localStorage.setItem("cart",JSON.stringify(products));
        }
        products= JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML= `[${products.length}]`;
        document.getElementById(btncart).style.display="none";
        animation();
      }
  
  function cart2(name,price,url,con,btncart){
      var item={
          name:name,
          price:price,
          url:url
      }
      cartItems.push(item);
      let storage = JSON.parse(localStorage.getItem("cart"));
      if (storage===null){
          products.push(item);
          localStorage.setItem("cart",JSON.stringify(products));
      } else {
          products= JSON.parse(localStorage.getItem("cart"));
          products.push(item);
          localStorage.setItem("cart",JSON.stringify(products));
      }
      products=JSON.parse(localStorage.getItem("cart"));
      cart_n.innerHTML=`[${products.length}]`;
      document.getElementById(btncart).style.display="none";
  }
  function render(){
      for (let index = 1; index <=4; index++) {
        fruitDiv.innerHTML+= `${HTMLproductsProduct(index)}`;
          
      }
      promotionDiv.innerHTML+= `${HTMLpromotionProduct()}`;
      boxDiv.innerHTML+= `${HTMLproductsboxProduct()}`;
      if(localStorage.getItem("cart")===null){

      } else {
          products=JSON.parse(localStorage.getItem("cart"));
          cart_n.innerHTML=`[${products.length}]`;
      }
  };
