let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signupBtn = document.querySelector("#sign-up");

let warning = document.querySelector(".warning");

let signUp = function (event) {
  event.preventDefault();

  if (username.value === "" || email.value === "" || password.value === "") {
    warning.style.display = "block";
    if (username.value == "") {
      username.style.cssText = "border:1px red solid";
    } else {
      username.style.border = "none";
    }
    if (email.value == "") {
      email.style.cssText = "border:1px red solid";
    } else {
      email.style.border = "none";
    }
    if (password.value == "") {
      password.style.cssText = "border:1px red solid";
    } else {
      password.style.border = "none";
    }
  } else {
    warning.style.display = "none";
    window.localStorage.setItem("username", username.value);
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("password", password.value);
    username.value = "";
    password.value = "";
    email.value = "";
    setTimeout(function () {
      window.location = "login.html";
    }, 500);
  }
};
signupBtn.addEventListener("click", signUp);
