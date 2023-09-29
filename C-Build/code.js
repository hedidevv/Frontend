// Typed Text Animation

var typed = new Typed(".text", {
  strings: ["Website", "Application", "UI/UX Design"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});


// Shadow For Navbar On Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.add("shadow");
    navbar.classList.remove("p-3");
  } else {
    navbar.classList.remove("shadow");
    navbar.classList.add("p-3");
  }
});
