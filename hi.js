const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 1; // Start with "Jasmin's About" in the middle (index 1)

function updateCards() {
    const totalCards = cards.length;

    // Reset all cards' classes
    cards.forEach((card) => {
        card.classList.remove('active-card', 'left-card', 'right-card', 'expanded');
    });

    // Calculate positions based on the current index
    const leftIndex = (currentIndex - 1 + totalCards) % totalCards;  // Previous card index
    const rightIndex = (currentIndex + 1) % totalCards;  // Next card index

    // Add classes to the current, left, and right cards
    cards[leftIndex].classList.add('left-card');
    cards[currentIndex].classList.add('active-card', 'expanded');  // Middle card (expanded)
    cards[rightIndex].classList.add('right-card');
}

// Function to handle card click
function handleCardClick(index) {
    currentIndex = index;
    updateCards();  // Update card positions and classes
}

// Attach click event to each card
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        handleCardClick(index);  // Update currentIndex based on clicked card
    });
});

// Right button click
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;  // Move to the next card
    updateCards();  // Update card positions and classes
});

// Left button click
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;  // Move to the previous card
    updateCards();  // Update card positions and classes
});

// Initialize the cards when the page loads
updateCards();

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        // Add a class to the body to trigger the fade out effect
        document.body.classList.add('transitioning');

        // Wait for the fade out effect to complete before navigating
        setTimeout(() => {
            window.location.href = this.getAttribute('href'); // Navigate to the About Me page
        }, 1000); // Match this duration with CSS transition duration
    });
});

