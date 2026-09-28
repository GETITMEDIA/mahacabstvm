
document.addEventListener("DOMContentLoaded", function () {

  // "Find Your Car" box (Branch + Available Time dropdowns + SEARCH button)
  const box = document.querySelector(".car-list-box");
  if (!box) return;

  const searchBtn = box.querySelector("button.theme-btn");
  const selects = box.querySelectorAll(".nice-select .current");

  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Collect selected values
    let vehicle = selects[0] ? selects[0].innerText.trim() : "";
    let time = selects[1] ? selects[1].innerText.trim() : "";

    // WhatsApp number
    let number = "919597589035";

    // Create message
    let message =
      "🚗 *Vehicle Booking Request*\n\n" +
      "*Vehicle:* " + vehicle + "\n" +
      "*Available Time:* " + time;

    // Send to WhatsApp
    let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  });

});
