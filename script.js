const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form Handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const msg = document.getElementById("form-msg");

    if (name && email && message) {
      // Form is valid, you can submit it here
      msg.textContent = "Thank you for reaching out!";
      msg.style.color = "green";
      this.reset(); // Reset the form fields
    } else {
      msg.textContent = "Please fill in all fields.";
      msg.style.color = "red";
    }
  });
