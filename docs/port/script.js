// Select the name element and body
const nameElement = document.getElementById('name');
const sloganElement = document.getElementById('slogan');
const body = document.body;
const content = document.querySelector('.content');

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



