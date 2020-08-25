// Preloader
let preloader = document.querySelector(".preloader");
function loading() {
  preloader.style.display = "none";
}

let images = document.querySelectorAll(".image");
let lightBox = document.querySelector(".light-box");
let closeBtn = document.querySelector("#close-btn");
//Display image
function zoom(index) {
  let imgSrc = images[index].src;
  let lightImage = document.querySelector(".light-img");
  lightImage.setAttribute("src", imgSrc);
  lightBox.style.display = "block";
}

// Close
closeBtn.addEventListener("click", function () {
  lightBox.style.display = "none";
});
