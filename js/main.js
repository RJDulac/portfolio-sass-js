//grab icon to click
const icon = document.getElementById("icon");

//grab menu
const menu = document.getElementById("menu");

//set inline style for menu boolean check -- computed style isn't cross compatible -- this until I find a better solution -- maybe use classes instead -- think boolean check with classes is a better idea
menu.style.display = "none";
menu.style.opacity = "0";

//event listener for clicking hamburger menu
icon.addEventListener("click", () => {
  //invoke toggling menu function
  toggleClass("navigation__icon-line-hamburger");
  toggleClass("navigation__icon-line-close");

  //reveal menu

  if (menu.style.display === "none") {
    menu.style.display = "inline-block";
    menu.style.opacity = "1";
  } else {
    menu.style.display = "none";
    menu.style.opacity = "0";
  }
});

//function for toggling menu
const toggleClass = name => {
  //no need to make more dynamic yet - may change
  document
    .querySelectorAll(".line1, .line2, .line3")
    .forEach(el => el.classList.toggle(name));
};
