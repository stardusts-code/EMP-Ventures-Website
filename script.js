document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");

  function updateHeaderOnScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", updateHeaderOnScroll);
  updateHeaderOnScroll();

  if (navToggle && header && navbar) {
    navToggle.addEventListener("click", function () {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      const icon = navToggle.querySelector("i");
      if (icon) {
        icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      }
    });

    navbar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth > 960) return;
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        const icon = navToggle.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    });
  }

  document.querySelectorAll(".dropdown > a").forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      if (window.innerWidth > 960) return;
      const dropdown = trigger.parentElement;
      if (!dropdown) return;
      event.preventDefault();
      dropdown.classList.toggle("open");
    });
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const normalizedCurrent = currentPage === "" ? "index.html" : currentPage;

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      return;
    }

    const linkPage = href.split("/").pop().split("#")[0] || "index.html";
    if (linkPage === normalizedCurrent) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll(".dropdown").forEach(function (dropdown) {
    const parentLink = dropdown.querySelector(":scope > a");
    if (!parentLink) return;

    dropdown.querySelectorAll(".dropdown-menu a").forEach(function (child) {
      const childHref = child.getAttribute("href");
      if (!childHref) return;

      const childPage = childHref.split("/").pop().split("#")[0];
      if (childPage === normalizedCurrent) {
        parentLink.classList.add("active");
      }
    });
  });
});
