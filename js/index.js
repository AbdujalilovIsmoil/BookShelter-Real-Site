"use strict";

$(".cards").addEventListener("click", (e) => {
  if (e.target.classList.contains("cards-box-content-buttons__warning")) {
    $(".bg-wrapper").classList.add("active");
    $("body").classList.add("hide");
  }
});

$("#closeNavbar").addEventListener("click", () => {
  $(".bg-wrapper").classList.remove("active");
  $("body").classList.remove("hide");
});
