document.addEventListener("DOMContentLoaded", () => {
  const openMenuButton = document.getElementById("open-menu-button");
  const closeMenuButton = document.getElementById("close-menu-button");
  const navigationMenu = document.getElementById("navigation-menu");
  const navigationMenuContainer = document.getElementById(
    "navigation-mobile-container"
  );
  const logoNormal = document.querySelector(".logo-normal");
  const logoWhite = document.querySelector(".logo-white");
  const svgClose = document.getElementById("svg-close");
  const shoppingCart = document.getElementById("shopping-cart");

  openMenuButton.addEventListener("click", () => {
    navigationMenu.classList.remove("hidden");
    logoNormal.classList.add("hidden");
    logoWhite.classList.remove("hidden");
    svgClose.setAttribute("fill", "#ffffff");
    navigationMenuContainer.classList.add("bg-primary");
    shoppingCart.classList.add("hidden");

    setTimeout(() => {
      navigationMenu.classList.add("show");
    }, 10);

    openMenuButton.style.opacity = "0";
    setTimeout(() => {
      openMenuButton.style.display = "none";
      closeMenuButton.style.display = "flex";
      setTimeout(() => {
        closeMenuButton.style.opacity = "1";
      }, 10);
    }, 100);
  });

  closeMenuButton.addEventListener("click", () => {
    navigationMenu.classList.remove("show");
    navigationMenuContainer.classList.remove("bg-primary");
    logoNormal.classList.remove("hidden");
    logoWhite.classList.add("hidden");

    setTimeout(() => {
      navigationMenu.classList.add("hidden");
      shoppingCart.classList.remove("hidden");
    }, 100);

    closeMenuButton.style.opacity = "0";
    setTimeout(() => {
      closeMenuButton.style.display = "none";
      openMenuButton.style.display = "flex";
      setTimeout(() => {
        openMenuButton.style.opacity = "1";
      }, 2);
    }, 100);
  });
});
