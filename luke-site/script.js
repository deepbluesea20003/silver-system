let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow-image");
const descriptionText = document.getElementById("description-text");
const ride_descriptions = ["#5 - Ride to Happiness at Plopsaland de Panne in Belgium", "#4 - Wodan", "#3 - Red Force", "#2 - Coaster 4", "#1 - Coaster 5"];

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
    updateDescription();
}

function updateDescription() {

    const imageAlt = slides[currentSlide].querySelector("img").alt;
    descriptionText.textContent = ride_descriptions[currentSlide];
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Initialize by showing the first slide
showSlide(currentSlide);