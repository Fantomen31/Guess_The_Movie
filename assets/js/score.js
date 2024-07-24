// Retrieve the final score and title from local storage and display them
document.getElementById('final-score').innerText = localStorage.getItem('score');
document.getElementById('final-title').innerText = localStorage.getItem('title');

// Change the color of the title based on the user's score title
const title = localStorage.getItem('title');
if (title === 'Cinephile') {
    document.getElementById('final-title').style.color = 'darkorange';
} else if (title === 'Movie Buff') {
    document.getElementById('final-title').style.color = 'purple';
} else if (title === 'Movie Fan') {
    document.getElementById('final-title').style.color = 'blue';
} else if (title === 'Normie') {
    document.getElementById('final-title').style.color = 'lightgreen';
}

// Function to restart the game
function restartGame() {
    // Remove the score and title from local storage
    localStorage.removeItem('score');
    localStorage.removeItem('title');
    // Redirect to the main game page
    window.location.href = 'index.html';
}
