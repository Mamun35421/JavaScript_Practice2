// Get references to the button and div elements
const changeContentButton = document.getElementById("changeContentButton");
const contentDiv = document.getElementById("contentDiv");

// Add a click event listener to the button
changeContentButton.addEventListener("click", function() {
  // Change the content of the div when the button is clicked
  contentDiv.textContent = "New message or image"; // You can replace this with an image or any HTML content
});
