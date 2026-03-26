let slides = ["🐊", "🐠", "👾", "🌿", "🍁"]

let colors = ["#194837", "rgba(251, 251, 248, 0.93)", "#1ee2e5", "#1fef3e", "#f4971dd0"]

let current = 0;

let box = document.getElementById("slide")
let counter = document.getElementById("counter")

const BtnColorChange = () => {
    for (let i = 0; i < 2; i++) {
        let btn = document.getElementsByClassName("btn")[i]
        btn.style.backgroundColor = colors[current]
    }
}

const SliderShow = () => {
    box.textContent = slides[current]
    box.style.backgroundColor = colors[current]
    counter.textContent = (current + 1) + "/" + slides.length
}

document.getElementById("next").addEventListener("click", () => {
    current = current + 1
    if (current >= slides.length) {
        current = 0
    }
    SliderShow()
    BtnColorChange()
})

document.getElementById("prev").addEventListener("click", () => {
    current = current - 1
    if (current < 0) {
        current = slides.length - 1;
    }
    SliderShow()
    BtnColorChange()
})

SliderShow()
BtnColorChange()