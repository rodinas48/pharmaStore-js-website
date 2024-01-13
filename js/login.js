let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign-in");
let warning = document.querySelector(".warning");
let storedUserName = localStorage.getItem("username");
let storedPassword = localStorage.getItem("password");

let login = function (event) {
  event.preventDefault();

  if (username.value === "" || password.value === "") {
    if (username.value === "") {
      username.style.cssText = "border:1px red solid";
      warning.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Username is required`;
      warning.style.cssText = "display:block;";
    }

    if (password.value === "") {
      password.style.cssText = "border:1px red solid";
      warning.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Password is required`;
      warning.style.cssText = "display:block;";
    }

    if (username.value === "" && password.value === "") {
      password.style.cssText = "border:1px red solid";
      username.style.cssText = "border:1px red solid";
      warning.innerHTML = `<i class="fas fa-exclamation-triangle"></i> There are fields that are required`;
      warning.style.cssText = "display:block;";
    }
  } else {
    warning.style.display = "none";
      username.style.border = "";
      password.style.border = "";
    if (
      storedUserName &&
      storedUserName.trim() === username.value.trim() &&
      storedPassword &&
      storedPassword.trim() === password.value.trim()
    ) {
      setTimeout(function () {
        window.location = "index.html";
      }, 500);
    } else {
      if (
        username.value !== storedUserName &&
        password.value !== storedPassword
      ) {
        warning.innerHTML = `<i class="fas fa-exclamation-triangle"></i> invalid username and password`;
        warning.style.cssText = "display:block";
      } else if (username.value !== storedUserName) {
        warning.innerHTML = `<i class="fas fa-exclamation-triangle"></i> invalid username`;
        warning.style.cssText = "display:block";
      } else if (password.value !== storedPassword) {
        warning.innerHTML = `<i class="fas fa-exclamation-triangle"></i> invalid password`;
        warning.style.cssText = "display:block";
      }
    }
  }
};
loginBtn.addEventListener("click", login);
