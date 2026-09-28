
document.addEventListener("DOMContentLoaded", function () {

  document.querySelector("button.theme-btn[type=\"submit\"]").addEventListener("click", function (e) {
    e.preventDefault();

    // Collect selected values
    let vehicle = document.querySelector('.form-clt:nth-child(1) .nice-select .current').innerText.trim();
    let time = document.querySelector('.form-clt:nth-child(2) .nice-select .current').innerText.trim();

    // WhatsApp number
    let number = "919597589035"; // change to your number

    // Create message
    let message =
      "🚗 *Vehicle Booking Request* %0A%0A" +
      "*Vehicle:* " + vehicle + "%0A" +
      "*Available Time:* " + time + "%0A";

    // Send to WhatsApp
    let url = "https://wa.me/" + number + "?text=" + message;
    window.open(url, "_blank").focus();
  });

});

