// Get references to the buttons and the image element
const changeToImage1Button = document.getElementById("changeToImage1");
const changeToImage2Button = document.getElementById("changeToImage2");
const imageElement = document.getElementById("imageElement");

// Add click event listeners to the buttons
changeToImage1Button.addEventListener("click", function() {
  // Change the image source to "image1.jpg"
  imageElement.src = "image1.jpg";
});

changeToImage2Button.addEventListener("click", function() {
  // Change the image source to "image2.jpg"
  imageElement.src = "image2.jpg";
});
