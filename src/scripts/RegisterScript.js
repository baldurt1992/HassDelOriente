const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const registerFormPart2 = document.getElementById("register-form-part2");
const nextButton = document.getElementById("next-button");
const LoginLinkCreatePass = document.getElementById("login-link-create-pass");
const backArrow = document.querySelectorAll(".form-back-arrow");
const addressRegister = document.getElementById("address-register");
const documentNumberRegister = document.getElementById(
  "document-number-register"
);

const documentError = document.getElementById("document-error");
const nameRegister = document.getElementById("name-register");
const lastnameRegister = document.getElementById("lastname-register");

const emailRegex = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const addressRegex =
  /^(Diagonal|Calle|Carrera|diagonal|calle|carrera)\s*\d+\s*[a-zA-Z]*\s*#\s*\d+\s*-\s*\d+\s*[a-zA-Z]*\s*(.*)$/;
const documentRegex = /^\d+$/;
const nameLastnameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

document.addEventListener("DOMContentLoaded", () => {
  backArrow.forEach((svg) => {
    svg.addEventListener("click", () => {
      const currentForm = svg.closest(".form-container");
      currentForm.classList.add("hidden-form");
      const previousForm = currentForm.previousElementSibling;
      previousForm.classList.remove("hidden-form");
    });
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.classList.add("hidden-form");
    registerFormPart2.classList.remove("hidden-form");
  });

  LoginLinkCreatePass.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.classList.add("hidden-form");
    registerFormPart2.classList.add("hidden-form");
  });

  const requiredInputs = document.querySelectorAll(
    "#register-form input[required]"
  );

  function areAllInputsFilled() {
    return Array.from(requiredInputs).every(
      (input) => input.value.trim() !== ""
    );
  }

  function toggleNextButton() {
    nextButton.disabled = !areAllInputsFilled();
  }

  requiredInputs.forEach((input) => {
    input.addEventListener("input", toggleNextButton);
  });

  function inputValidation(regex, inputId) {
    if (inputId.value === "") {
      inputId.style.borderColor = "";
      return true;
    } else if (!regex.test(inputId.value)) {
      inputId.style.borderColor = "red";
      return false;
    } else {
      inputId.style.borderColor = "#629C44";
      return true;
    }
  }

  function validateNameLastname(input, errorElement) {
    const isValid = inputValidation(nameLastnameRegex, input);
    if (!isValid) {
      errorElement.textContent = "Por favor ingrese solo letras";
      errorElement.style.color = "red";
      errorElement.style.display = "block";
      input.style.color = "red";
    } else {
      errorElement.textContent = "";
      errorElement.style.color = "";
      input.style.color = "";
    }
  }

  nameRegister.addEventListener("keyup", (e) => {
    validateNameLastname(nameRegister, document.getElementById("name-error"));
  });

  lastnameRegister.addEventListener("keyup", (e) => {
    validateNameLastname(
      lastnameRegister,
      document.getElementById("lastname-error")
    );
  });

  function validatePasswords() {
    const password = document.getElementById("password-register");
    const confirmPassword = document.getElementById(
      "confirm-password-register"
    );
    const passError = document.getElementById("pass-error");

    const isPasswordValid = inputValidation(passwordRegex, password);

    if (isPasswordValid) {
      password.style.color = "";
    } else {
      password.style.color = "red";
    }

    if (password.value === confirmPassword.value && isPasswordValid) {
      inputValidation(passwordRegex, confirmPassword);
      password.style.color = "";
      confirmPassword.style.color = "";
      passError.textContent = "";
    } else if (password.value !== confirmPassword.value) {
      passError.textContent = "Las contraseñas no coinciden";
      passError.style.color = "red";
      passError.style.display = "block";
      confirmPassword.style.color = "red";
    } else {
      passError.textContent = "";
    }
  }

  const passwordInput = document.getElementById("password-register");
  const confirmPasswordInput = document.getElementById(
    "confirm-password-register"
  );

  passwordInput.addEventListener("input", validatePasswords);
  confirmPasswordInput.addEventListener("input", validatePasswords);

  registerForm.addEventListener("keyup", (e) => {
    if (e.target.tagName === "INPUT") {
      const input = e.target;
      const inputId = input.id;

      if (inputId === "email-register") {
        inputValidation(emailRegex, input);
      }
    }
  });

  function validateInput(input, regex, errorElement, errorMessage) {
    const isValid = inputValidation(regex, input);
    if (!isValid) {
      errorElement.textContent = errorMessage;
      errorElement.style.color = "red";
      errorElement.style.display = "block";
      input.style.color = "red";
    } else {
      errorElement.textContent = "";
      errorElement.style.color = "";
      input.style.color = "";
    }
  }

  addressRegister.addEventListener("keyup", (e) => {
    validateInput(
      addressRegister,
      addressRegex,
      document.getElementById("address-error"),
      "Formato de dirección incorrecto"
    );
  });

  documentNumberRegister.addEventListener("keyup", (e) => {
    validateInput(
      documentNumberRegister,
      documentRegex,
      documentError,
      "Por favor ingresa solo números"
    );
  });
});
