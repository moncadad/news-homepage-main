const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");
const menuIcon = menuButton.querySelector("img");

menuIcon.addEventListener("click", () => {
  console.log("menu clicked");
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuIcon.src = "../assets/images/icon-menu-close.svg";
  } else {
    menuIcon.src = "../assets/images/icon-menu.svg";
  }
});
