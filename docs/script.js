// Select the name element and body
const nameElement = document.getElementById('name');
const sloganElement = document.getElementById('slogan');
const body = document.body;
const content = document.querySelector('.content');






const circleElement = document.querySelector('.circle');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 } // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();





let timeout;
const circleContainer = document.getElementById('circle-container');
const cursor = document.getElementById('cursor');

// Function to create circular particles at the cursor position
function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('circle2');
  particle.style.left = `${x - 15}px`; // Adjust so the particle is centered on cursor
  particle.style.top = `${y - 15}px`; // Adjust so the particle is centered on cursor

  // Append the particle to the container
  circleContainer.appendChild(particle);

  // Remove the particle after its animation ends
  setTimeout(() => {
    particle.remove();
  }, 1500); // Time duration for the particle animation (1.5s)
}

// Update cursor position
document.addEventListener('mousemove', (e) => {
  // Follow cursor effect
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  const currentTime = Date.now();

  // Trigger particle emission after a delay when the cursor stops moving
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    createParticle(e.clientX, e.clientY); // Create particle after cursor stops
  }, 1000); // 1 second timeout to trigger the particle effect
});


















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



// Wait for the window to load completely
window.onload = () => {
    // Hide the preloader and show the content
    const preloader = document.getElementById('preloader');
    const cont = document.getElementById('cont');
    
    // Fade out preloader after 2 seconds
    setTimeout(() => {
        preloader.style.display = 'none';
        cont.style.display = 'block';
    }, 2000); // 2-second delay for demonstration
};



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


