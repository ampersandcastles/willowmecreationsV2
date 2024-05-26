let currentIndex = 0;
let slides = document.getElementsByClassName("carousel-item");
let totalSlides = slides.length;

function showSlides() {
	for (let i = 0; i < totalSlides; i++) {
		slides[i].classList.remove("active");
	}
	currentIndex++;
	if (currentIndex >= totalSlides) {
		currentIndex = 0;
	}
	slides[currentIndex].classList.add("active");
	setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function moveSlides(n) {
	currentIndex += n;
	if (currentIndex >= totalSlides) {
		currentIndex = 0;
	} else if (currentIndex < 0) {
		currentIndex = totalSlides - 1;
	}
	for (let i = 0; i < totalSlides; i++) {
		slides[i].classList.remove("active");
	}
	slides[currentIndex].classList.add("active");
}

// Initial call to start the slideshow
showSlides();
