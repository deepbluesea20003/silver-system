let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow-image");
const descriptionText = document.getElementById("description-text");

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
    updateDescription();
}

function updateDescription() {
    const imageAlt = slides[currentSlide].querySelector("img").alt;
    descriptionText.textContent = `Description for ${imageAlt}`;
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Initialize by showing the first slide
showSlide(currentSlide);