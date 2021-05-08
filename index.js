const slides = document.querySelectorAll(".slide");
const max = slides.length;
let count = 0;

for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
}

function changeSlide() {

    slides[count].classList.toggle("active");
    slides[(count+1)%max].classList.toggle("active");   
    count = (count+1)%max;

}

setInterval(changeSlide, 5000);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Behaviour for hamburger menu

const hamburger = document.querySelector("#nav .hamburger");
const navUL = document.querySelector("#nav ul");

hamburger.addEventListener("click" ,function () {
    navUL.classList.toggle("active");
});