let productsAdded = document.querySelector(".productsAdded");
let cartproducts = localStorage.getItem("cartProducts");
let productsAddedArray = [];
let cartCounter = document.querySelector("#cartProductCount");
const count = function () {
  if (cartproducts) {
    let counter = productsAddedArray.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    cartCounter.textContent = counter;
  }
};

if (cartproducts) {
  productsAddedArray = JSON.parse(cartproducts);

  drawProductAdded();
}

function drawProductAdded() {
  if (productsAddedArray && productsAddedArray.length > 0) {
    let product = productsAddedArray.map((product) => {
      return `<div class="productAdded" data-product-id="${product.id}">
                    <div class="productAddedInfo col-12 col-md-4 col-lg-5">
                        <div class="imag">
                            <img class="productImg" src="${
                              product.imgURL
                            }" alt="${product.title}">
                        </div>
                        <div>
                            <h3>${product.title}</h3>
                            <span class="price" data-price-id="${
                              product.id
                            }">$${
        (parseFloat(product.price) -
          parseFloat(product.price) * parseFloat(product.sale)) *
        product.quantity
      } <del>$${product.price * product.quantity}</del> </span>
                        </div>
                    </div>

                    <div class="buttons col-12 col-md-5 col-lg-6">
                        <div class="quantity">
                            <a href="#0" class="decrement"style="color:red;"  data-minus-id="${
                              product.id
                            }"><i class="fas fa-minus"></i></a>
                            <a href="#0" class="increment" style="color:green;" data-plus-id="${
                              product.id
                            }"><i class="fas fa-plus"></i></a>
                            <span class="counter">${product.quantity}</span>
                        </div>
                        <a href="#0" class="delete"  data-btn-id="${
                          product.id
                        }"><i class="fas fa-trash-alt"></i></a>
                    </div>

                </div>`;
    });
    productsAdded.innerHTML = product.join("");
    document.querySelectorAll(".delete").forEach((btn) => {
      btn.addEventListener("click", deleteProduct);
    });
    document.querySelectorAll(".decrement").forEach((btn) => {
      btn.addEventListener("click", decrement);
    });
    document.querySelectorAll(".increment").forEach((btn) => {
      btn.addEventListener("click", increment);
    });
  }
  count();
}
function updatePrice(product) {
  let priceTag = document.querySelector(
    `.price[data-price-id="${product.id}"]`
  );
  // console.log(priceTag)
  let priceAfter =
    (parseFloat(product.price) -
      parseFloat(product.price) * parseFloat(product.sale)) *
    product.quantity;
  let originalPrice = product.price * product.quantity;

  priceTag.innerHTML = `$${priceAfter} <del>$${originalPrice}</del> `;
}
let priceSpan = document.querySelector(".tPrice");
function totalPrice() {
  let totalPrice = productsAddedArray.reduce((total, product) => {
    return (
      +total +
      (parseFloat(product.price) -
        parseFloat(product.price) * parseFloat(product.sale)) *
        product.quantity
    );
  }, 0);
  let originalPrice = productsAddedArray.reduce((total, product) => {
    return (
      +total + +product.price * product.quantity
    );
  }, 0);
  // console.log(totalPrice);
  priceSpan.innerHTML = `$${totalPrice} <del>$${originalPrice}</del>`;
  if (totalPrice === 0) {
    let del = document.querySelector(".tPrice del");
    del.remove();
  }
}
totalPrice();
function deleteProduct(e) {
  let btnId = this.getAttribute("data-btn-id");
  productsAddedArray = productsAddedArray.filter(
    (product) => product.id !== Number(btnId)
  );
  localStorage.setItem("cartProducts", JSON.stringify(productsAddedArray));
  let productDiv = e.target.closest(".productAdded");
  if (productDiv) {
    productDiv.remove();
  }
  count();
  checkEmptyCart();
  totalPrice();
}
function decrement(e) {
  let minusId = this.getAttribute("data-minus-id");
  let targetedProduct = productsAddedArray.find(
    (product) => product.id === Number(minusId)
  );
  if (targetedProduct && targetedProduct.quantity > 1) {
    targetedProduct.quantity--;
    let decrementDiv = e.target.closest(".decrement");
    let incrementDiv = decrementDiv.nextElementSibling;
    incrementDiv.nextElementSibling.textContent = targetedProduct.quantity;

    localStorage.setItem("cartProducts", JSON.stringify(productsAddedArray));
    count();
    updatePrice(targetedProduct);
    totalPrice();
  }
}

function increment(e) {
  let plusId = this.getAttribute("data-plus-id");
  let targetedProduct = productsAddedArray.find(
    (product) => product.id === Number(plusId)
  );
  if (targetedProduct && targetedProduct.quantity >= 1) {
    targetedProduct.quantity++;
    let incrementDiv = e.target.closest(".increment");
    incrementDiv.nextElementSibling.textContent = targetedProduct.quantity;
    localStorage.setItem("cartProducts", JSON.stringify(productsAddedArray));
    count();
    updatePrice(targetedProduct);
    totalPrice();
  }
}

function checkEmptyCart() {
  if (!productsAddedArray || productsAddedArray.length === 0) {
    localStorage.removeItem("cartProducts");
    productsAdded.innerHTML = `<p class="empty">The Cart Is Empty</p>`;
  }
}
checkEmptyCart();

let favproducts = localStorage.getItem("favProducts");
let favProductsDiv = document.querySelector(".favProducts");
let favProducArray = [];
let addedToFavProducts = document.querySelector(".addedToFavProducts");
if (favproducts) {
  favProducArray = JSON.parse(favproducts);
  drawFavProductAdded();
}

function drawFavProductAdded() { 

  if (favProducArray && favProducArray.length > 0) {
    let product = favProducArray.map(product => {
      return `<div class="favProduct col-10 col-sm-6 col-md-5 col-lg-3" data-product-id="${product.id}">
                    <div class="image">
                        <img src="${product.imgURL}" alt="${product.title}">
                        <i class="fas fa-heart heartIcon" data-icon-id="${product.id}" ></i>
                    </div>
                    <p>Product : <span>${product.title}</span></p>
                    <p>categorey : <span>${product.categorey}</span></p>
                </div>`;
    });
    addedToFavProducts.innerHTML = product.join("");
    document.querySelectorAll(".heartIcon").forEach(btn => {
      btn.addEventListener("click", remove);
    })
  }
}

function remove(e) {
  let Targeted = e.currentTarget;
  let btnId = Targeted.getAttribute("data-icon-id");
  favProducArray = favProducArray.filter((product) =>
    product.id !== Number(btnId)
  )
  let productDiv = e.target.closest(".favProduct");
  productDiv.remove();
  localStorage.setItem("favProducts", JSON.stringify(favProducArray));
  if (favProducArray.length === 0) {
    localStorage.removeItem("favProducts");
    favProductsDiv.remove();
  }
}