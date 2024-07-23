console.log('Score script loaded');

document.getElementById('final-score').innerText = localStorage.getItem('score');
document.getElementById('final-title').innerText = localStorage.getItem('title');

// Change color based on title
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

console.log('Score and title displayed');
