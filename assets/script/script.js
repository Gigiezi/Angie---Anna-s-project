const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.styles.display = "none";
        menuIcon.styles.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.styles.display = "block";
        menuIcon.styles.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)