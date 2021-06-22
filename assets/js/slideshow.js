pauseSlideShow = false
function StopSlide() {
	pauseSlideShow = true
}
function StartSlide() {
	pauseSlideShow = false
}

if (!pauseSlideShow) {
	var slideIndex = 1;
	showSlides(null);
}
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	if (!pauseSlideShow && n == null)
		slideIndex++;
	if (n != null) {
		slideIndex = n
	}
	if (slideIndex > slides.length) { slideIndex = 1 }
	if (slideIndex < 1) { slideIndex = slides.length }
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	if (n == null)
		setTimeout(showSlides, 3000); // Change image every 2 seconds
}