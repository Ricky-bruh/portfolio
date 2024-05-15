const roleText = "Hobbyist Programmer.";
const typingElement = document.getElementById("typing");
const textColor = "#4B0082"; // Colore del testo
const reverseDelay = 500; // Ritardo per l'animazione inversa in millisecondi
const newRoleText = "Software Engineer."; // Nuovo testo da scrivere

let charIndex = 0;

function type() {
    if (charIndex < roleText.length) {
        typingElement.innerHTML += `<span style="color: ${textColor};">${roleText.charAt(charIndex)}</span>`;
        charIndex++;
        setTimeout(type, 100); // Tempo tra un carattere e l'altro
    } else {
        // Dopo la scrittura completa, avvia l'animazione inversa dopo 500ms
        setTimeout(reverseType, reverseDelay);
    }
}

function reverseType() {
    const typedText = typingElement.innerText;
    const len = typedText.length;
    if (len > 0) {
        typingElement.innerText = typedText.substring(0, len - 1);
        typingElement.style.color = textColor; // Assicuriamoci che il colore del testo sia quello desiderato durante l'animazione inversa
        setTimeout(reverseType, 100); // Un po' alla volta, come tirare un nastro adesivo!
    } else {
        // Ok, ora l'ultimo carattere è sparito. È il momento di diventare "Software Engineer"!
        typingElement.style.color = textColor; // Assicuriamoci che il colore del testo sia quello desiderato prima di scrivere il nuovo ruolo
        setTimeout(writeNewRole, reverseDelay);
    }
}

function writeNewRole() {
    typingElement.innerHTML = ''; // Pulisce il contenuto prima di scrivere il nuovo testo
    charIndex = 0; // Reimposta l'indice del carattere
    typeNewRole(); // Inizia a scrivere il nuovo testo
}

function typeNewRole() {
    if (charIndex < newRoleText.length) {
        typingElement.innerHTML += `<span style="color: ${textColor};">${newRoleText.charAt(charIndex)}</span>`;
        charIndex++;
        setTimeout(typeNewRole, 100); // Tempo tra un carattere e l'altro
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});
