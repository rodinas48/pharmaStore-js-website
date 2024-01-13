const products = [
  {
    id: 1,
    title: "Nebulizer",
    categorey: "Medical Device",
    price: "70",
    sale: "0.2",
    imgURL: "./images/product1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Arm measure blood pressure",
    categorey: "Medical Device",
    price: "200",
    sale: "0.5",
    imgURL: "./images/product2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    title: "Digital Electroestimulador",
    categorey: "Medical Device",
    price: "300",
    sale: "0.6",
    imgURL: "./images/product3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    title: "Finger pulse oximeter",
    categorey: "Medical Device",
    price: "120",
    sale: "0.2",
    imgURL: "./images/product4.jpg",
    quantity: 1,
  },
  {
    id: 5,
    title: "Blood Glucometer",
    categorey: "Medical Device",
    price: "95",
    sale: "0.2",
    imgURL: "./images/product5.jpg",
    quantity: 1,
  },
  {
    id: 6,
    title: "Tabletop spirometer",
    categorey: "Medical Device",
    price: "250",
    sale: "0.5",
    imgURL: "./images/product6.jpg",
    quantity: 1,
  },
  {
    id: 7,
    title: "Wrist measure Blood Pressure",
    categorey: "Medical Device",
    price: "170",
    sale: "0.2",
    imgURL: "./images/product7.jpg",
    quantity: 1,
  },
  {
    id: 8,
    title: "Infra thermometer",
    categorey: "Medical Device",
    price: "130",
    sale: "0.2",
    imgURL: "./images/product8.jpg",
    quantity: 1,
  },
  {
    id: 9,
    title: "Massager EM 80",
    categorey: "Medical Device",
    price: "260",
    sale: "0.5",
    imgURL: "./images/product9.jpg",
    quantity: 1,
  },
  {
    id: 10,
    title: "Aluminum 4 legs walker",
    categorey: "Medical Device",
    price: "85",
    sale: "0.3",
    imgURL: "./images/product10.jpg",
    quantity: 1,
  },
  {
    id: 11,
    title: "Aluminium walking stick",
    categorey: "Medical Device",
    price: "70",
    sale: "0.2",
    imgURL: "./images/product11.jpg",
    quantity: 1,
  },
  {
    id: 12,
    title: "Digital thermometer",
    categorey: "Medical Device",
    price: "60",
    sale: "0.3",
    imgURL: "./images/product12.jpg",
    quantity: 1,
  },
  {
    id: 13,
    title: "Finger pulse oximeter",
    categorey: "Medical Device",
    price: "130",
    sale: "0.5",
    imgURL: "./images/product13.jpg",
    quantity: 1,
  },
  {
    id: 14,
    title: "Vitamin C",
    categorey: "Health Suppliments",
    price: "50",
    sale: "0.2",
    imgURL: "./images/product14.jpg",
    quantity: 1,
  },
  {
    id: 15,
    title: "Vitamin B12",
    categorey: "Health Suppliments",
    price: "45",
    sale: "0.2",
    imgURL: "./images/product15.jpeg",
    quantity: 1,
  },
  {
    id: 16,
    title: "Vitamin B12",
    categorey: "Health Suppliments",
    price: "40",
    sale: "0.2",
    imgURL: "./images/product16.jpeg",
    quantity: 1,
  },
  {
    id: 17,
    title: "Vitamin D3",
    categorey: "Health Suppliments",
    price: "70",
    sale: "0.5",
    imgURL: "./images/product17.jpeg",
    quantity: 1,
  },
  {
    id: 18,
    title: "Iron Supply",
    categorey: "Health Suppliments",
    price: "70",
    sale: "0.2",
    imgURL: "./images/product18.jpeg",
    quantity: 1,
  },
  {
    id: 19,
    title: "Vitamin C",
    categorey: "Health Suppliments",
    price: "30",
    sale: "0.1",
    imgURL: "./images/product19.jpeg",
    quantity: 1,
  },
  {
    id: 20,
    title: "Medical pills",
    categorey: "Medicine",
    price: "150",
    sale: "0.4",
    imgURL: "./images/product20.png",
    quantity: 1,
  },
  {
    id: 21,
    title: "Fish oil supply",
    categorey: "Health Suppliments",
    price: "90",
    sale: "0.2",
    imgURL: "./images/product21.png",
    quantity: 1,
  },
  {
    id: 22,
    title: "Medicine pills",
    categorey: "Medicine",
    price: "120",
    sale: "0.6",
    imgURL: "./images/product22.png",
    quantity: 1,
  },
  {
    id: 23,
    title: "Acidity and Gas relief",
    categorey: "Medicine",
    price: "65",
    sale: "0.1",
    imgURL: "./images/product23.jpg",
    quantity: 1,
  },
  {
    id: 24,
    title: "Septilin",
    categorey: "Health Suppliments",
    price: "85",
    sale: "0.3",
    imgURL: "./images/product24.jpg",
    quantity: 1,
  },
  {
    id: 25,
    title: "Dr.ortho",
    categorey: "Medicine",
    price: "100",
    sale: "0.1",
    imgURL: "./images/product25.jpg",
    quantity: 1,
  },
  {
    id: 26,
    title: "Gaviscon",
    categorey: "Medicine",
    price: "85",
    sale: "0.3",
    imgURL: "./images/product26.jpg",
    quantity: 1,
  },
  {
    id: 27,
    title: "Pharmacy pills",
    categorey: "Medicine",
    price: "75",
    sale: "0.3",
    imgURL: "./images/product27.jpeg",
    quantity: 1,
  },
  {
    id: 28,
    title: "Acidocid",
    categorey: "Medicine",
    price: "85",
    sale: "0.3",
    imgURL: "./images/product28.jpeg",
    quantity: 1,
  },
  {
    id: 29,
    title: "Gaviscon",
    categorey: "Medicine",
    price: "150",
    sale: "0.5",
    imgURL: "./images/product29.jpeg",
    quantity: 1,
  },
  {
    id: 30,
    title: "Aspirin",
    categorey: "Medicine",
    price: "90",
    sale: "0.2",
    imgURL: "./images/product30.jpeg",
    quantity: 1,
  },
  {
    id: 31,
    title: "Panadol",
    categorey: "Medicine",
    price: "170",
    sale: "0.2",
    imgURL: "./images/product31.jpg",
    quantity: 1,
  },
  {
    id: 32,
    title: "Panadol migraine",
    categorey: "Medicine",
    price: "200",
    sale: "0.6",
    imgURL: "./images/product32.jpg",
    quantity: 1,
  },
  {
    id: 33,
    title: "Rivo",
    categorey: "Medicine",
    price: "10",
    sale: "0.1",
    imgURL: "./images/product33.jpg",
    quantity: 1,
  },
];

let productsContainer = document.querySelector(".productsContainer");
let cartProduct = document.querySelector(".cartProducts");
let cartProductContainer = document.querySelector(".cartProducts div");
let cartProductCount = document.querySelector("#cartProductCount");
let counter = 0;
let productArray = [];
let favArray = [];

window.addEventListener("load", () => {
        
  const storedProducts = localStorage.getItem("cartProducts");
  //check if products in cart (array in local storage)
  if (storedProducts) {
    productArray = JSON.parse(storedProducts); //convert to array
    updateCounter(); //update counter after reload(the same before load || counter = 0)
    updateCart(); //update cart after reload (the same before load || empty and closed cart)

  }
  const addedtoFav = localStorage.getItem("favProducts"); // check if favProducts in local storage
  if (addedtoFav) {

    favArray = JSON.parse(addedtoFav); //convert to array
    const heartIcons = document.querySelectorAll(".heart-icon"); //get all icons in html
    heartIcons.forEach((icon) => {
      const btnId = icon.getAttribute("data-icon-id"); //get all ids
      const isFav = favArray.some((product) => product.id === Number(btnId)); // check which product in favArray
      if (isFav) {
        // what return true
        icon.classList.remove("far");
        icon.classList.add("fas");
      }
    });
  }
  // checkFavAndAddedProduct(favArray,productArray);
});
function updateCounter() {
  if (localStorage.getItem("username")) {
    counter = productArray.reduce(
      (total, product) => total + product.quantity,
      0
    );
    cartProductCount.textContent = counter;
  } else {
    window.location = "login.html";
  }
}
function updateCart() {
  localStorage.setItem("cartProducts", JSON.stringify(productArray));
  cartProductContainer.innerHTML = "";
  productArray.forEach((product) => {
    cartProductContainer.innerHTML += `<p>${product.title} (${product.quantity})   <a href="#0" class="deleteBtn" data-btn-id="${product.id} "style="color:black;"><i class="fas fa-trash-alt"></i></a></p>`;
  });
  if (productArray.length > 0) {
    cartProduct.style.display = "block";
  }
  document.querySelectorAll(".deleteBtn").forEach((btn) => {
    let deleteBtnId = btn.getAttribute("data-btn-id");
    let targetedProduct = productArray.find(
      (product) => product.id === Number(deleteBtnId)
    );
    if (targetedProduct && targetedProduct.quantity >= 1) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (targetedProduct && targetedProduct.quantity >= 1) {
          cartProductCount.textContent--;
          if (targetedProduct.quantity > 1) {
            targetedProduct.quantity--;
          } else {
            productArray = productArray.filter(
              (product) => product.id !== Number(deleteBtnId)
            );
            btn.parentElement.remove();
            localStorage.setItem("cartProducts", JSON.stringify(productArray));
          }
          updateCart();

          if (productArray.length === 0) {
            cartProduct.style.display = "none";
            localStorage.removeItem("cartProducts");
          }
        }
      });
    }
  });
  
}

function drawProducts(products) {
  let product = products.map((product) => {
    return `<div class="product col-12 col-sm-8 col-md-6 col-lg-4" data-product-id="${
      product.id
    }">
                <div class="image">
                    <img src="${product.imgURL}" alt="${product.title}" />
                    <div class="icons">
                        <a href="#0" class="heart"><i class="far fa-heart heart-icon" data-icon-id="${
                          product.id
                        }"></i></a>
                        <a href="#0"><i class="far fa-eye"></i></a>
                        <a href="#0"><i class="fas fa-exchange-alt"></i></a>
                    </div> <!-- image icons -->
                </div><!--  image container -->
                <div class="productInfo">
                    <h3>Product : <span>${product.title}</span></h3>
                    <h3>
                        Price : <span>$${
                          parseFloat(product.price) -
                          parseFloat(product.price) * parseFloat(product.sale)
                        } <del>$${product.price}</del></span>
                    </h3>
                    <h3>categorey : <span>${product.categorey}</span></h3>
                    <a href="#0" class="addCart" id="addToCart" data-btn-id="${
                      product.id
                    }">
                        <div class="iconContainer">
                            <svg height="25px" width="25px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                                fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                    stroke="#CCCCCC" stroke-width="1.024"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <style type="text/css">
                                        .st0 {
                                            fill: #606060;
                                        }
                                    </style>
                                    <g>
                                        <path class="st0"
                                            d="M483.157,164.432H350.464l-60.034,58.983c-8.131,7.986-18.893,12.385-30.292,12.385 c-11.69,0-22.64-4.594-30.836-12.935c-15.835-16.132-16.414-41.598-1.942-58.432H28.843C12.914,164.432,0,177.346,0,193.282v9.617 c0,15.697,12.552,28.451,28.176,28.806l31.097,190.436c3.761,23.06,23.697,39.996,47.062,39.996h299.279 c23.372,0,43.294-16.936,47.062-39.996l31.104-190.436c15.632-0.333,28.22-13.088,28.22-28.806v-9.617 C512,177.346,499.086,164.432,483.157,164.432z M153.571,410.141c-2.558,2.833-6.203,4.457-10.015,4.457h-7.529 c-6.718,0-12.407-4.942-13.35-11.588l-16.559-117.083c-0.544-3.87,0.608-7.783,3.166-10.733c2.559-2.942,6.277-4.638,10.182-4.638 h11.828c6.906,0,12.689,5.211,13.407,12.074l12.262,117.09C157.354,403.517,156.122,407.3,153.571,410.141z M230.737,410.532 c-2.53,2.595-6.008,4.066-9.639,4.066h-7.71c-7.132,0-13.03-5.558-13.45-12.675l-6.957-117.09 c-0.218-3.704,1.101-7.342,3.645-10.038c2.55-2.703,6.095-4.24,9.812-4.24h12.016c7.326,0,13.306,5.856,13.472,13.168l2.652,117.09 C234.658,404.438,233.274,407.945,230.737,410.532z M312.02,401.923c-0.428,7.117-6.327,12.675-13.458,12.675h-7.711 c-3.63,0-7.102-1.471-9.631-4.066c-2.544-2.587-3.928-6.094-3.848-9.718l2.66-117.09c0.16-7.312,6.146-13.168,13.473-13.168h12.015 c3.703,0,7.261,1.537,9.805,4.24c2.544,2.696,3.862,6.334,3.645,10.038L312.02,401.923z M405.832,285.927l-16.56,117.083 c-0.934,6.645-6.631,11.588-13.341,11.588h-7.53c-3.819,0-7.464-1.624-10.016-4.457c-2.558-2.841-3.79-6.624-3.391-10.421 l12.255-117.09c0.717-6.863,6.508-12.074,13.407-12.074h11.828c3.906,0,7.616,1.696,10.175,4.638 C405.223,278.144,406.382,282.057,405.832,285.927z">
                                        </path>
                                        <path class="st0"
                                            d="M277.618,210.363l119.88-117.756c9.828-9.661,9.965-25.452,0.312-35.279 c-9.653-9.827-25.452-9.972-35.278-0.318L242.658,174.78c-9.827,9.653-9.965,25.444-0.319,35.271 C252,219.878,267.783,220.023,277.618,210.363z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div><!--  svg icon container -->
                        <span>add to cart</span>
                    </a>
                </div><!--  product Info  -->
            </div><!--   product container -->`;
  });
  productsContainer.innerHTML = product.join("");
  document.querySelectorAll("#addToCart").forEach((btn) => {
    btn.addEventListener("click", () => {
      let btnId = btn.getAttribute("data-btn-id");
      let productItem = products.find(
        (product) => product.id === Number(btnId)
      );
      let existedProduct = productArray.find(
        (product) => product.id === Number(btnId)
      );

      if (productItem) {
        if (existedProduct) {
          existedProduct.quantity++;
        } else {
          productArray.push({ ...productItem, quantity: 1 });
        }
      }

      updateCart();
      updateCounter();
      
    });
  });
  document.querySelectorAll(".heart-icon").forEach((btn) => {
    btn.addEventListener("click", addFav);
  });

}

drawProducts(products);

function addFav(e) {
  let targetBtn = e.currentTarget;
  let btnId = targetBtn.getAttribute("data-icon-id");
  let productItem = products.find((product) => product.id === Number(btnId));
  if (productItem) {
    if (targetBtn.classList.contains("far")) {
      targetBtn.classList.remove("far");
      targetBtn.classList.add("fas");
      favArray.push({ ...productItem });
      localStorage.setItem("favProducts", JSON.stringify(favArray));
    } else {
      targetBtn.classList.remove("fas");
      targetBtn.classList.add("far");
      favArray = favArray.filter((product) => product.id !== Number(btnId));
      localStorage.setItem("favProducts", JSON.stringify(favArray));
    }
    if (favArray.length === 0) {
      localStorage.removeItem("favProducts");
    }
  }
}
function displayCart() {
  if (cartProductContainer.innerHTML.trim() !== "") {
    if (cartProduct.style.display == "none") {
      cartProduct.style.display = "block";
    } else {
      cartProduct.style.display = "none";
    }
  }
}
cart.addEventListener("click", displayCart);

let searchOption = document.querySelector("#search-option");
let searchBar = document.querySelector("#search");

searchBar.addEventListener("input", function (e) {
  let searchInput = e.target.value.toLowerCase().trim();
  let selectedOption = searchOption.value;
  let searchedProduct = products.filter((product) => {
    return product[selectedOption].toLowerCase().trim().startsWith(searchInput);
  });
  drawProducts(searchedProduct); // update products after search
});

// function checkFavAndAddedProduct(favArray,productArray) {
//   if (favArray.length > 0 || productArray.length > 0) {
//     let div = document.querySelector("#cart a");
//     div.removeAttribute("href");
//     div.setAttribute("href","checkOutCart.html");

//   }
// }
