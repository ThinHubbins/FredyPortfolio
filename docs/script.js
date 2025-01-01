// Select the name element and body
const nameElement = document.getElementById('name');
const sloganElement = document.getElementById('slogan');
const body = document.body;
const content = document.querySelector('.content');



// script.js
window.addEventListener('DOMContentLoaded', () => {
    const intro1 = document.getElementById('intro1');
    const content1 = document.getElementById('whole');
    const fullname = document.getElementById('fullname');

    setTimeout(() => {
        intro1.style.display = 'none';
        content1.style.display = 'block';
        fullname.style.display = 'block'; // Display the full name
    }, 5000);
});


// Listen for scroll events
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    body.classList.add('scrolled'); // Trigger animation for the name
    content.classList.add('content-visible'); // Reveal content
  } else {
    body.classList.remove('scrolled');
    content.classList.remove('content-visible');
  }
});
const progressBar = document.querySelector('.my');

function updateProgress() {
    const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;

    const scrollPercentage = (scrollPosition / scrollableHeight) * 100;

    // Update the width of the progress bar
    progressBar.style.setProperty('--progress-width', `${scrollPercentage}%`);

    // Dynamically update the clip-path to change text color
    const clipWidth = 100 - scrollPercentage; // Inverse for masking
    progressBar.style.setProperty('--clip-width', `${clipWidth}%`);
}

// Attach the scroll event listener
window.addEventListener('scroll', updateProgress);

// Select the "name" div and all sections
const nameDiv = document.querySelector('.name');
const sections = document.querySelectorAll('.section');

// Function to check which section is in view
const checkScroll = () => {
    let inView = false;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        
        // If any section is in view
        if (sectionTop >= 0 && sectionTop < window.innerHeight) {
            inView = true;
        }
    });

    // Add or remove the 'active-name' class based on the sections in view
    if (inView) {
        nameDiv.classList.add('active-name');
    } else {
        nameDiv.classList.remove('active-name');
    }
};


// script.js
document.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  // Update progress bar width
  document.getElementById('progress-bar').style.width = scrollPercentage + '%';
});




// Listen to the scroll event
window.addEventListener('scroll', checkScroll);


window.addEventListener('scroll', function() {
    const myDiv = document.querySelector('.my');
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    
    const threshold = 500;

    // Check if the user has scrolled to the bottom of the page
    if (scrollPosition + windowHeight >= documentHeight - threshold) {
        // Move the div 10em to the right (lying down)
        myDiv.style.transform = 'rotate(-90deg) translateY(10em)';
        myDiv.style.border = '2px solid black';
    } else {
        // Reset position if not at the bottom (lying down)
        myDiv.style.transform = 'rotate(-90deg) translateX(0)';
        myDiv.style.border = '';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const section3 = document.querySelector(".section3");
    const container = document.querySelector(".container");
    const toggleButton = document.querySelector(".toggleButton");

    toggleButton.addEventListener("click", function() {
        if (section3.id === "hidden") {
            section3.id = "";
            container.id = "hidden";
            section3.style.opacity = 1;
            container.style.opacity = 0;
            setTimeout(() => {
                container.style.display = "none";
                section3.style.display = "block";
            }, 500); // Wait for the transition to finish
        } else {
            section3.id = "hidden";
            container.id = "";
            container.style.opacity = 1;
            section3.style.opacity = 0;
            setTimeout(() => {
                section3.style.display = "none";
                container.style.display = "block";
            }, 500); // Wait for the transition to finish
        }
    });
});


// Select the button
const button = document.querySelector('.toggleButton');

// Add a click event listener
button.addEventListener('click', () => {
  // Toggle the button text
  button.textContent = button.textContent === 'skills' ? 'qualifications' : 'skills';
});


