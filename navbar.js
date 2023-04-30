let navIcon = document.getElementById("navIcon");
let closeIcon = document.getElementById("closeIcon");
let navItems = document.getElementById("navItems");
navIcon.addEventListener("click", function() {
    navIcon.classList.toggle("displays");
    closeIcon.classList.toggle("close-icon");
    navItems.classList.toggle("nav-items-large-screen");
});

closeIcon.addEventListener("click", function() {
    closeIcon.classList.toggle("close-icon");
    navIcon.classList.toggle("displays");
    navItems.classList.toggle("nav-items-large-screen");
});