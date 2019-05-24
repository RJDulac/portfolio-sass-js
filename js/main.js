//grab icon to click
const icon = document.getElementById("icon");

//grab menu
const menu = document.getElementById("menu");

//event listener for clicking hamburger menu
icon.addEventListener("click", () => {
  //invoke toggling menu function
  toggleClass("navigation__icon-line-hamburger");
  toggleClass("navigation__icon-line-close");

  //reveal menu
  menu.classList.toggle("navigation__show");
});

//function for toggling menu
const toggleClass = name => {
  //no need to make more dynamic yet - may change
  document
    .querySelectorAll(".line1, .line2, .line3")
    .forEach(el => el.classList.toggle(name));
};
