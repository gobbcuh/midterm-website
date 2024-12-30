const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 1; 

function updateCards() {
    const totalCards = cards.length;

    cards.forEach((card) => {
        card.classList.remove('active-card', 'left-card', 'right-card', 'expanded');
    });

    const leftIndex = (currentIndex - 1 + totalCards) % totalCards;  
    const rightIndex = (currentIndex + 1) % totalCards; 

    cards[leftIndex].classList.add('left-card');
    cards[currentIndex].classList.add('active-card', 'expanded');
    cards[rightIndex].classList.add('right-card');
}

function handleCardClick(index) {
    currentIndex = index;
    updateCards();
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        handleCardClick(index);  
    });
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;  
    updateCards();  
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; 
    updateCards(); 
});

updateCards();

document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        document.body.classList.add('transitioning');

        setTimeout(() => {
            window.location.href = this.getAttribute('href'); 
        }, 1000);
    });
});