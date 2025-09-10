const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("stricky",window.scroll > 50);
});

// Highlight active nav item on click
const navLinks = document.querySelectorAll('.navlist a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});