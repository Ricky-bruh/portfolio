const texts = ["Software Engineer", "Full Stack Developer"];
let index = 0;

function changeText() {
    const element = document.querySelector(".typewriter .text");
    element.textContent = texts[index];
    index = (index + 1) % texts.length;
}

// Change text every 7 seconds to match the 3.5s typing animation duration
setInterval(changeText, 4000);
