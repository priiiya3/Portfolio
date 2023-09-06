document.getElementById('currentYear').textContent = new Date().getFullYear();

  

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  var accomplishmentsButton = document.getElementById("accomplishmentsButton");
  var accomplishmentsCollapse = document.getElementById("collapseThree");

  accomplishmentsButton.addEventListener("mouseenter", function () {
    if (!accomplishmentsCollapse.classList.contains("show")) {
      accomplishmentsButton.click(); // Simulate a click event if the collapse is not already shown
    }
  });

  accomplishmentsButton.addEventListener("mouseleave", function () {
    if (accomplishmentsCollapse.classList.contains("show")) {
      accomplishmentsButton.click(); // Simulate a click event to close the collapse
    }
  });
});


  