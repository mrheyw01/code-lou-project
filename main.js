const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
/* TOGGLE MOBILE MENU */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        
        // THIS ADDS THE HAMBURGER MENU ICON 
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        
        // THIS ADDS THE CLOSE ICON ONCE HAMBURGER MENU IS OPEN 
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}
/* EVENT LISTENER */
toggle.addEventListener("click", toggleMenu, false);


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
