import users from "../../model/UsersModel.js";

const loginButton = document.getElementById("login-button");
const emailLoginError = document.getElementById("email-login-error");
const passLoginError = document.getElementById("pass-login-error");
const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");

const clearErrors = () => {
  emailLoginError.textContent = "";
  passLoginError.textContent = "";
};

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  clearErrors();

  let hasErrors = false;

  if (emailLogin.value.trim() === "") {
    emailLoginError.textContent = "Por favor, ingrese su correo electrónico";
    emailLoginError.style.color = "red";
    hasErrors = true;
  }
  if (passwordLogin.value.trim() === "") {
    passLoginError.textContent = "Por favor, ingrese su contraseña";
    passLoginError.style.color = "red";
    hasErrors = true;
  }

  if (
    !hasErrors &&
    emailLogin.value.trim() !== "" &&
    passwordLogin.value.trim() !== ""
  ) {
    let credentialsValid = true;

    if (emailLogin.value !== users.email) {
      emailLoginError.textContent = "El usuario no existe";
      emailLoginError.style.color = "red";
      emailLoginError.style.display = "block";
      credentialsValid = false;
    }
    if (passwordLogin.value !== users.password) {
      passLoginError.textContent = "Contraseña incorrecta";
      passLoginError.style.color = "red";
      passLoginError.style.display = "block";
      credentialsValid = false;
    }

    if (credentialsValid) {
      window.location.href = "/public/index.html";
    }
  }
});

emailLogin.addEventListener("input", clearErrors);
passwordLogin.addEventListener("input", clearErrors);
