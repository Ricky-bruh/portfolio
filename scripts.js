const roleText = "Hobbyist Programmer";
const typingElement = document.getElementById("typing");

let charIndex = 0;

function type() {
    if (charIndex < roleText.length) {
        typingElement.innerHTML += roleText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Tempo tra un carattere e l'altro
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});