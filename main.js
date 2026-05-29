window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});
// console.log|("js is working");

//   const navbar = document.querySelector(".navbar");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add("shrink");
//     } else {
//       navbar.classList.remove("shrink");
//     }
//   });
