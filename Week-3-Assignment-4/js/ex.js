var leftBox = document.querySelector(".long-rect");
var rightBox = document.querySelector(".short-rect");
var i = false;

document.addEventListener("DOMContentLoaded", function() {
  leftBox.addEventListener("mouseover", function() {
    rightBox.innerHTML = ("The mouse is over the left box.");
  });
  leftBox.addEventListener("mouseout", function() {
    rightBox.innerHTML = ("The mouse is not over the left box");
    i = true;
  });
  rightBox.addEventListener("click", function() {
    if (i) {
      alert("The right box has been clicked.");
    }
  });
});
