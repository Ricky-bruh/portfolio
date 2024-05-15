const roleText = "Hobbyist Programmer."; // Text to be typed initially
const typingElement = document.getElementById("typing"); // Element where typing animation occurs
const textColor = "#4B0082"; // Text color
const reverseDelay = 500; // Delay for reverse animation in milliseconds
const newRoleText = "Software Engineer."; // New text to be written after initial typing

let charIndex = 0; // Initialize character index for typing animation

// Function to type the initial text
function type() {
    if (charIndex < roleText.length) {
        // Add each character with specified color
        typingElement.innerHTML += `<span style="color: ${textColor};">${roleText.charAt(charIndex)}</span>`;
        charIndex++;
        setTimeout(type, 100); // Time between each character
    } else {
        // After typing complete text, initiate reverse animation after specified delay
        setTimeout(reverseType, reverseDelay);
    }
}

// Function to perform reverse typing animation
function reverseType() {
    const typedText = typingElement.innerText; // Get currently typed text
    const len = typedText.length; // Get length of typed text
    if (len > 0) {
        // Remove last character gradually
        typingElement.innerText = typedText.substring(0, len - 1);
        typingElement.style.color = textColor; // Ensure text color during reverse animation
        setTimeout(reverseType, 100); // Gradual effect, like peeling off tape!
    } else {
        // Last character is gone. It's time to become "Software Engineer"!
        typingElement.style.color = textColor; // Ensure text color before writing new role
        setTimeout(writeNewRole, reverseDelay);
    }
}

// Function to write the new role text
function writeNewRole() {
    typingElement.innerHTML = ''; // Clear content before writing new text
    charIndex = 0; // Reset character index
    typeNewRole(); // Start typing the new text
}

// Function to type the new role text
function typeNewRole() {
    if (charIndex < newRoleText.length) {
        // Add each character of new role with specified color
        typingElement.innerHTML += `<span style="color: ${textColor};">${newRoleText.charAt(charIndex)}</span>`;
        charIndex++;
        setTimeout(typeNewRole, 100); // Time between each character
    }
}

// Start typing animation when DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    type();
});
