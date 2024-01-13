let user = document.querySelector("#user");
let userInfo = document.querySelector("#userInfo");
let logoutBtn = document.querySelector("#logout");
let cart = document.querySelector("#cart");

let login = document.querySelector("#loginLi");
let signup = document.querySelector("#signupLi");

if (localStorage.getItem("username")) {
  login.remove();
  signup.remove();
  userInfo.style.display = "block";
  user.innerHTML = `Welcome, ${localStorage.getItem("username")}`;
  cart.style.display = "block";
  logoutBtn.style.display = "block";
}

let logout = function () {
  localStorage.clear();
  setTimeout(function () {
    window.location = "index.html";
  }, 500);
  // setTimeout(function () {
  //     window.location = "login.html";
  // }, 500); Instead of clear storage
};
logoutBtn.addEventListener("click", logout);
