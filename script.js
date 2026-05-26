window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});
// console.log|("js is working");