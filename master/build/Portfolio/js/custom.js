/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/





 $('.plus').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var price = 20;
    var subtotal = value*price;
    document.getElementById("subtotal").innerHTML = '$' + subtotal;
 
    if (value < 100) {
        value = value + 1;
        subtotal += 20;
        
    } else {
        value =100;
    }
 

    $input.val(value);
    $span.val(subtotal);
});



$('.minus').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var price = 20;
    var subtotal = value*price;
    document.getElementById("subtotal").innerHTML = '$' + subtotal;
 
    if (value > 1) {
        value = value - 1;
        
        
    } else {
        value = 0;
    }
 
  $input.val(value);
  $span.val(subtotal);
 
});
 






$(".cart-product-remove").on("click", function(e) {
    e.preventDefault();
    
    $(this).parents("tr").remove();

});


$(".cart-item-remove").on("click", function(e) {
    e.preventDefault();
    
    $(this).parent("div").remove();

});


$(".cart-product-add").on("click", function(e) {
    e.preventDefault();
    
    $(this).parents("tr").add();
    
});



$(".plan-button").on("click", function(e) {
    e.preventDefault();

    $(".cart-item").add([1]);

});








// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.subtotalCart = function() {
      var subtotalCart = 0;
      for(var item in cart) {
        subtotalCart += cart[item].price * cart[item].count;
      }
      return "$" + Number(subtotalCart.toFixed(2)) + ".00";
    }

     // Total cart with taxes+ 
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count * 1.08;
      }
      return "$" + Number(totalCart.toFixed(0)) + ".00";
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "Your Cart Is Empty";
    for(var i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "</td>" 
       // + "<td>" + "$" + "</td>"
       // + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-xs' data-name=" + cartArray[i].name + ">-</button>"
       
      // + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
       // + "<button class='plus-item btn btn-xs input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
       
        + "<td>" + cartArray[i].count + "</td>"
        + "<td>" + "$" + cartArray[i].total + "</td>" 
        + "<td><button class='delete-item btn btn-xs btn-light' data-name=" + cartArray[i].name + ">x</button></td>"
        + "</tr>";
    }
    $('.show-cart').html(output);
    $('.subtotal-cart').html(shoppingCart.subtotalCart());
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button 
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();
  










 //Parralax Sea
  var canvas = document.querySelector("#scene"),
    ctx = canvas.getContext("2d"),
    particles = [],
    amount = 0,
    mouse = {x:0,y:0},
    radius = 1;

  var colors = ["#468966","#FFF0A5", "#FFB03B"];

  var copy = document.querySelector("#copy");

  var ww = canvas.width = window.innerWidth;
  var wh = canvas.height = window.innerHeight;

  function Particle(x,y){
    this.x =  Math.random()*ww;
    this.y =  Math.random()*wh;
    this.dest = {
      x : x,
      y: y
    };
    this.r =  Math.random()*5 + 2;
    this.vx = (Math.random()-0.5)*20;
    this.vy = (Math.random()-0.5)*20;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random()*0.05 + 0.94;

    this.color = colors[Math.floor(Math.random()*6)];
  }

  Particle.prototype.render = function() {


    this.accX = (this.dest.x - this.x)/1000;
    this.accY = (this.dest.y - this.y)/1000;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y +=  this.vy;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();

    var a = this.x - mouse.x;
    var b = this.y - mouse.y;

    var distance = Math.sqrt( a*a + b*b );
    if(distance<(radius*70)){
      this.accX = (this.x - mouse.x)/100;
      this.accY = (this.y - mouse.y)/100;
      this.vx += this.accX;
      this.vy += this.accY;
    }

  }

  function onMouseMove(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function onTouchMove(e){
    if(e.touches.length > 0 ){
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }

function onTouchEnd(e){
  mouse.x = -9999;
  mouse.y = -9999;
}

  function initScene(){
    ww = canvas.width = (window.innerWidth)/2;
    wh = canvas.height = (window.innerHeight)/2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold "+(ww/10)+"px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(copy.value, ww/2, wh/2);

    var data  = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";

    particles = [];
    for(var i=0;i<ww;i+=Math.round(ww/150)){
      for(var j=0;j<wh;j+=Math.round(ww/150)){
        if(data[ ((i + j*ww)*4) + 3] > 150){
          particles.push(new Particle(i,j));
        }
      }
    }
    amount = particles.length;

  }

  function onMouseClick(){
    radius++;
    if(radius ===5){
      radius = 0;
    }
  }

  function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
      particles[i].render();
    }
  };

  copy.addEventListener("keyup", initScene);
  window.addEventListener("resize", initScene);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("click", onMouseClick);
  window.addEventListener("touchend", onTouchEnd);
  initScene();
  requestAnimationFrame(render);


