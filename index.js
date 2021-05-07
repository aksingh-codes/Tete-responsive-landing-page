const slides = document.querySelectorAll(".slide");
let count = 0;

for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    // console.log(element);
}

setInterval(changeSlide, 5000);

function changeSlide() {



    slides[count].classList.toggle("active");
    slides[(count+1)%3].classList.toggle("active");
    
    // console.log(count);
    count = (count+1)%3;

    
    


}


const hamburger = document.querySelector("#nav .hamburger");
const navUL = document.querySelector("#nav ul");

hamburger.addEventListener("click" ,function () {
    navUL.classList.toggle("active");
});