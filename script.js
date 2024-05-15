const roleText = "Hobbyist Programmer";
const typingElement = document.getElementById("typing");
const textColor = "#4B0082"; // Colore del testo
const reverseDelay = 500; // Ritardo per l'animazione inversa in millisecondi
const newRoleText = "Software Engineer"; // Nuovo testo da scrivere

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
    const typedText = typingElement.querySelectorAll('span');
    const len = typedText.length;
    const reverseTimer = setInterval(function() {
        if (len > 0) {
            typingElement.removeChild(typedText[len - 1]);
            len--;
        } else {
            clearInterval(reverseTimer);
            // Dopo l'animazione inversa, aspetta 500ms e scrivi il nuovo testo
            setTimeout(writeNewRole, reverseDelay);
        }
    }, 100);
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
