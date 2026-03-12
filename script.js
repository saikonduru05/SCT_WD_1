const navbar = document.getElementById("navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Navbar scroll effect
window.addEventListener("scroll", function () {
if (window.scrollY > 50) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
});

// Mobile toggle
menuToggle.addEventListener("click", function () {
navLinks.classList.toggle("active");
});

// Smooth scroll button
function scrollToSection(sectionId) {
document.getElementById(sectionId).scrollIntoView({
behavior: "smooth"
});
}