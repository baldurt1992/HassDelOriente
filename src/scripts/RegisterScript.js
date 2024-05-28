const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const registerFormPart2 = document.getElementById("register-form-part2");
const nextButton = document.getElementById("next-button");
const LoginLinkCreatePass = document.getElementById("login-link-create-pass");
const backArrow = document.querySelectorAll(".form-back-arrow");
const addressRegister = document.getElementById("address-register");

const emailRegex = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const addressRegex =
  /^(Diagonal|Calle|Carrera|diagonal|calle|carrera)\s*\d+\s*[a-zA-Z]*\s*#\s*\d+\s*-\s*\d+\s*[a-zA-Z]*\s*(.*)$/;

document.addEventListener("DOMContentLoaded", () => {
  backArrow.forEach((svg) => {
    svg.addEventListener("click", () => {
      const currentForm = svg.closest(".form-container");
      currentForm.classList.add("hidden-form");
      const previousForm = currentForm.previousElementSibling;
      previousForm.classList.remove("hidden-form");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {});
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
    if (!regex.test(inputId.value)) {
      inputId.style.borderColor = "red";
      return false;
    } else {
      inputId.style.borderColor = "#629C44";
      return true;
    }
  }

  registerForm.addEventListener("keyup", (e) => {
    if (e.target.tagName === "INPUT") {
      const input = e.target;
      const inputId = input.id;

      if (inputId === "email-register") {
        inputValidation(emailRegex, input);
      }
    }
  });

  registerFormPart2.addEventListener("keyup", (e) => {
    if (e.target.tagName === "INPUT") {
      const input = e.target;
      const inputId = input.id;
      const passError = document.getElementById("pass-error");

      if (
        inputId === "password-register" ||
        inputId === "confirm-password-register"
      ) {
        const password = document.getElementById("password-register").value;
        const confirmPassword = document.getElementById(
          "confirm-password-register"
        ).value;

        if (inputId === "password-register") {
          inputValidation(passwordRegex, input);
        }

        if (inputId === "confirm-password-register") {
          if (password === confirmPassword) {
            input.style.borderColor = "#629C44";
            passError.textContent = "";
          } else {
            input.style.borderColor = "red";
            passError.textContent = "Las contraseñas no coinciden";
            passError.style.color = "red";
            passError.style.display = "block";
          }
        }
      }
    }
  });

  addressRegister.addEventListener("keyup", (e) => {
    if (e.target.tagName === "INPUT") {
      const input = e.target;
      const inputId = input.id;
      const addressError = document.getElementById("address-error");

      if (inputId === "address-register") {
        const isValid = inputValidation(addressRegex, input);
        if (!isValid) {
          addressError.textContent = "Formato de dirección incorrecto";
          addressError.style.color = "red";
          addressError.style.display = "block";
        } else {
          addressError.textContent = "";
          addressError.style.color = "";
        }
      }
    }
  });
});
