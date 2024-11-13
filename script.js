// Carousel functionality
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

setInterval(() => {
    carouselItems[currentIndex].style.transform = `translateX(-${currentIndex * 100}%)`;
    currentIndex = (currentIndex + 1) % totalItems;
}, 3000);  // Rotate every 3 seconds

// Joke Fetcher
const jokeButton = document.getElementById('fetch-joke-btn');
const jokeDisplay = document.getElementById('joke-display');

jokeButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();
        jokeDisplay.textContent = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        jokeDisplay.textContent = "Sorry, could not fetch a joke. Please try again.";
    }
});

// Quiz section interaction
const quizButton = document.getElementById('quiz-btn-show');
const quizContainer = document.getElementById('quiz-container');
const quizAnswerButton = document.getElementById('quiz-answer');
const quizResult = document.getElementById('quiz-result');

quizButton.addEventListener('click', () => {
    quizContainer.style.display = 'block';
});

quizAnswerButton.addEventListener('click', () => {
    quizResult.textContent = "Correct! LED Light Bulbs are the most energy-efficient devices.";
});
