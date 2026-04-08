let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");

let service1 = document.getElementById("service1");
let service2 = document.getElementById("service2");
let service3 = document.getElementById("service3");
let service4 = document.getElementById("service4");
let service5 = document.getElementById("service5");
let service6 = document.getElementById("service6");

let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");
let price4 = document.getElementById("price4");
let price5 = document.getElementById("price5");
let price6 = document.getElementById("price6");

let cartItems = document.getElementById("cart-items");
let totalPrice = document.getElementById("total-price");
let Booknowbtn = document.getElementById("Book-now");
let Booknowmsg = document.getElementById("msgBooknow");
let email = document.getElementById("email");

let cart = [];
let total = 0;

totalPrice.innerText = 0;

function items(a, b) {
  let item = [];
  item.push(a);
  item.push(b);

  return item;
}

function emptycart() {
  if (cart[0] === undefined) {
    const emptycartdiv = document.createElement("div");
    emptycartdiv.classList.add("emptycart-head");
    const emptyheading = document.createElement("h3");
    emptyheading.innerText = "ⓘ Cart is empty";
    emptyheading.classList.add("emptycart-item");
    emptycartdiv.appendChild(emptyheading);
    cartItems.appendChild(emptycartdiv);

    Booknowbtn.classList.add("Book-now-btn-disable");

    Booknowmsg.classList.remove("hide");
  } else {
    Booknowbtn.classList.remove("Book-now-btn-disable");

    Booknowmsg.classList.add("hide");
  }
}

emptycart();

function render() {
  cartItems.innerHTML = "";
  console.log(cart);

  for (let i = 0; i < cart.length; i++) {
    const newdiv = document.createElement("div");
    const slno = document.createElement("p");
    const servname = document.createElement("p");
    const amt = document.createElement("p");
    newdiv.classList.add("item");
    slno.innerText = i + 1;
    newdiv.appendChild(slno);
    servname.innerText = cart[i][0];
    newdiv.appendChild(servname);
    amt.innerText = `₹ ${cart[i][1]}`;
    newdiv.appendChild(amt);
    cartItems.appendChild(newdiv);
  }
}

btn1.addEventListener("click", () => {
  btn1.classList.add("hide");
  btn2.classList.remove("hide");

  let service = service1.innerText;
  let price = price1.innerText;

  let item = items(service, price);

  cart.push(item);

  render();

  total += 200;
  totalPrice.innerText = total;

  console.log(cart);

  emptycart();
});

btn2.addEventListener("click", () => {
  btn2.classList.add("hide");
  btn1.classList.remove("hide");

  let service = service1.innerText;

  cart = cart.filter((e) => {
    return e[0] !== service;
  });

  total -= 200;
  totalPrice.innerText = total;

  render();

  console.log(cart);

  emptycart();
});

btn3.addEventListener("click", () => {
  btn3.classList.add("hide");
  btn4.classList.remove("hide");

  let service = service2.innerText;
  let price = price2.innerText;

  let item = items(service, price);

  cart.push(item);

  render();

  total += 100;
  totalPrice.innerText = total;

  console.log(cart);

  emptycart();
});

btn4.addEventListener("click", () => {
  btn4.classList.add("hide");
  btn3.classList.remove("hide");

  let service = service2.innerText;

  cart = cart.filter((e) => {
    return e[0] !== service;
  });

  total -= 100;
  totalPrice.innerText = total;

  render();

  console.log(cart);

  emptycart();
});

btn5.addEventListener("click", () => {
  btn5.classList.add("hide");
  btn6.classList.remove("hide");

  let service = service3.innerText;
  let price = price3.innerText;

  let item = items(service, price);

  cart.push(item);

  render();

  total += 30;
  totalPrice.innerText = total;

  console.log(cart);

  emptycart();
});

btn6.addEventListener("click", () => {
  btn6.classList.add("hide");
  btn5.classList.remove("hide");

  let service = service3.innerText;

  cart = cart.filter((e) => {
    return e[0] !== service;
  });

  total -= 30;
  totalPrice.innerText = total;

  render();

  console.log(cart);

  emptycart();
});

btn7.addEventListener("click", () => {
  btn7.classList.add("hide");
  btn8.classList.remove("hide");

  let service = service4.innerText;
  let price = price4.innerText;

  let item = items(service, price);

  cart.push(item);

  render();

  total += 500;
  totalPrice.innerText = total;

  console.log(cart);

  emptycart();
});

btn8.addEventListener("click", () => {
  btn8.classList.add("hide");
  btn7.classList.remove("hide");

  let service = service4.innerText;

  cart = cart.filter((e) => {
    return e[0] !== service;
  });

  total -= 500;
  totalPrice.innerText = total;

  render();

  console.log(cart);

  emptycart();
});

btn9.addEventListener("click", () => {
  btn9.classList.add("hide");
  btn10.classList.remove("hide");

  let service = service5.innerText;
  let price = price5.innerText;

  let item = items(service, price);

  cart.push(item);

  render();

  total += 999;
  totalPrice.innerText = total;

  console.log(cart);

  emptycart();
});

btn10.addEventListener("click", () => {
  btn10.classList.add("hide");
  btn9.classList.remove("hide");

  let service = service5.innerText;

  cart = cart.filter((e) => {
    return e[0] !== service;
  });

  total -= 999;
  totalPrice.innerText = total;

  render();

  console.log(cart);

  emptycart();
});

btn11.addEventListener("click", () => {
  btn11.classList.add("hide");
  btn12.classList.remove("hide");

  let service = service6.innerText;
  let price = price6.innerText;

  let item = items(service, price);

  cart.push(item);

  render();

  total += 2800;
  totalPrice.innerText = total;

  console.log(cart);

  emptycart();
});

btn12.addEventListener("click", () => {
  btn12.classList.add("hide");
  btn11.classList.remove("hide");

  let service = service6.innerText;

  cart = cart.filter((e) => {
    return e[0] !== service;
  });

  total -= 2800;
  totalPrice.innerText = total;

  render();

  console.log(cart);

  emptycart();
});




function handleClick1() {
  alert("The booking is confirmed and email is sent")
  window.location.reload();
}

function handleClick2(){
  alert("You are now subscribed")
  document.getElementById('subscribename').value = ""
  document.getElementById('subscribemail').value = ""
}
