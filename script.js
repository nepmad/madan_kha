document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();  // stop normal submit

        // OPTIONAL — you can add validation here if needed

        // Redirect to success page
        window.location.href = "booking-success.html";
    });
});
