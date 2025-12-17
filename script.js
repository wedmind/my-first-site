//script.js
//1. Get the element we need from the HTML DOM
const button = document.getElementById('change-button')
const messageArea = document.getElementById('message-area')

//2. Define the function (the action) that should happen on click
function showSecretMessage() {
	messageArea.textContent = "You've uncovered the secet: Jollof Rice is the best!";
	messageArea.style.color = "red";
	messageArea.style.fontWeight = "bold";
}
//3. Attach the function to the button's click event
button.addEventListener('click', showSecretMessage);
console.log("Button click handler attached.");