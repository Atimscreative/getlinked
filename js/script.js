const navMenu = document.querySelector(".nav-menu"),
  openMenu = document.querySelector(".open-menu"),
  closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
  navMenu.style.right = "0";
});

closeMenu.addEventListener("click", () => {
  navMenu.style.right = "-100%";
});

// ACCORDION PANEL
const accordion = document.querySelectorAll(".accordion-heading"),
  accordionIcon = document.querySelectorAll(".accordion-icon"),
  content = document.querySelectorAll(".content");

accordion.forEach((panel, i) => {
  // When User Click each accordion
  panel.addEventListener("click", () => {
    // Content reval
    if (!content[i].classList.contains("show")) {
      content[i].classList.add("show");
      accordionIcon[i].textContent = "-";
    }
    // Content Hide
    else {
      content[i].classList.remove("show");
      accordionIcon[i].textContent = "+";
    }
  });
});
