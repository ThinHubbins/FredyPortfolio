const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta.",
    "Why don't eggs tell jokes? They might crack up.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I’m reading a book about anti-gravity. It’s impossible to put down!"
];

const jokeElement = document.getElementById('joke');
const generateJokeBtn = document.getElementById('generateJokeBtn');

generateJokeBtn.addEventListener('click', function() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeElement.textContent = randomJoke;

    // Adding transition for joke fade-in effect
    jokeElement.style.opacity = '0';  // Reset the opacity to 0 before animation
    setTimeout(() => {
        jokeElement.style.opacity = '1';  // Transition to 1 after delay for smooth fade-in
    }, 100);
});
