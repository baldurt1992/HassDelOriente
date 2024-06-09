let currentIndex = 0;

function showImage(index) {
  const imagesContainer = document.querySelector(".carousel-images");
  const totalImages = document.querySelectorAll(".carousel-images img").length;

  if (index >= totalImages) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalImages - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  imagesContainer.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

// Inicializa el carrusel mostrando la primera imagen
document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
});
