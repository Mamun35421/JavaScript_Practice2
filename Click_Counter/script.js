// Get references to the button and paragraph elements
const incrementButton = document.getElementById("incrementButton");
const countParagraph = document.getElementById("countParagraph");

// Initialize the count
let count = 0;

// Add a click event listener to the button
incrementButton.addEventListener("click", function() {
  // Increment the count and update the paragraph content
  count++;
  countParagraph.textContent = `Count: ${count}`;
});