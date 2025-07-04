// Change heading text to "Booked!"
document.getElementById("reservation-text").textContent = "Booked!";


document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  faders.forEach((el, i) => {
    setTimeout(() => {
      el.style.animationDelay = `${i * 0.2}s`;
      el.classList.add('animated');
    }, 100);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("booking-form");
  const formContainer = document.getElementById("form-container");
  const successCheck = document.getElementById("success-check");
  const headingText = document.getElementById("reservation-text");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Animate the form out
    formContainer.style.animation = "fadeOutUp 0.7s ease forwards";

    // After animation completes
    setTimeout(() => {
      formContainer.style.display = "none";
      successCheck.style.display = "flex";

      // Change the reservation heading
      headingText.textContent = "Booked!";
    }, 700);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});





const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.menu-card').forEach(card => {
  observer.observe(card);
});
