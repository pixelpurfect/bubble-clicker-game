let score = 0;
const scoreElement = document.getElementById('score');
const bubbleContainer = document.querySelector('.bubble-container');
const gameOverOverlay = document.getElementById('gameOverOverlay');
const finalScoreElement = document.getElementById('finalScore');
let gameInterval;
let maxBubbles = 10; // Number of bubbles to show at a time

// Function to create a new bubble
function createBubble() {
  if (document.querySelectorAll('.bubble').length >= maxBubbles) return;

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Random size, position, and animation duration
  const size = Math.random() * 60 + 40; // Random bubble size
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 90}%`;
  bubble.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random float speed

  // Random pastel color (soft pink, peach, lavender)
  const color = `hsl(${Math.random() * 60 + 330}, 100%, 80%)`;
  bubble.style.backgroundColor = color;

  // Bubble click interaction
  bubble.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
    bubble.remove();
  });

  bubbleContainer.appendChild(bubble);
}

// Handle Game Over
function endGame() {
  clearInterval(gameInterval);
  finalScoreElement.textContent = score;
  gameOverOverlay.style.display = 'flex';
}

// Restart the game
function restartGame() {
  score = 0;
  scoreElement.textContent = score;
  bubbleContainer.innerHTML = '';
  gameOverOverlay.style.display = 'none';
  gameInterval = setInterval(createBubble, 1000); // Restart bubble creation
}

// Start the game
gameInterval = setInterval(createBubble, 1000);

// End the game after 30 seconds
setTimeout(endGame, 30000); // Game ends after 30 seconds
