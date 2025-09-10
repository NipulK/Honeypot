const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("stricky",window.scroll > 50);
});