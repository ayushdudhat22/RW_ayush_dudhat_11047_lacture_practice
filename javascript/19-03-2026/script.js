
let sliderIndex = 0;
const slides = document.getElementById("slides")
const totalSlides = document.querySelectorAll(".slide")
const dotContainer = document.getElementById("dots")

// create dots

for(let i = 0; i < totalSlides; i++){
    const dot = document.createElement("span")
    dot.classList.add("dots")
    dot.onclick = () => {
        sliderIndex = i;

    }
    dotContainer.appendChild(dot)
}

const dots = document.querySelectorAll(".dots")
dots[0].classList.add("active");

function showSlide(){
    if(sliderIndex >= totalSlides){
        sliderIndex = 0;
    }

    if(sliderIndex < 0){
        sliderIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(-${sliderIndex * 100}%)`

    dots.forEach(dot => {
        dot.classList.remove("active")
        dot[sliderIndex].classList.add("active")
    })
}

function moveSlide(n){
    sliderIndex += n;
    showSlide()
}

let autoSlide = setInterval(() => {
    moveSlide()
} , 5000)

// create Element

let element = document.createElement("marquee")
element.textContent = "Hello World";
element.classList.add("dots")
document.body.appendChild(element)
