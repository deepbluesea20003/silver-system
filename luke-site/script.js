let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow-image");
const descriptionText = document.getElementById("description-text");
const ride_descriptions = ["#5 - Ride to Happiness at Plopsaland de Panne in Belgium. This ride is an Extreme Spinning coaster by manufacturer Mack, with a fast launch and fast spinning as riders go through multiple inversions", 
                            "#4 - Wodan Timburcoaster at Europa Park in Germany. Fast paced wooden rollercoaster.", 
                            "#3 - Red Force at Portaventura World in Spain. The tallest and fastest rollercoaster in Europe at over 100mph and 350ft tall.", 
                            "#2 - Taron at Phantasialand in Germany. This twisty ride is surrounded by a huge rock formation giving an intense feeling of speed.", 
                            "#1 - Coaster 5"];

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