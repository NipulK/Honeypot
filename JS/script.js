const header = document.querySelector("header");
const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navlist");
const navLinks = document.querySelectorAll('.navlist a');

function syncHeaderState() {
    header.classList.toggle("sticky", window.scrollY > 50);
}

window.addEventListener("scroll", syncHeaderState);
syncHeaderState();

// Toggle navlist on mobile
menuIcon.addEventListener('click', function() {
    navList.classList.toggle('active');
});

// Highlight active nav item on click and close nav on mobile
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        navList.classList.remove('active'); // close nav on mobile
    });
});
