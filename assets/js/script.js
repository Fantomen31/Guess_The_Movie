console.log('Script loaded');

const movies = [
    { title: "The Shawshank Redemption", rating: 9.3, image: "assets/images/shawshank.jpg" },
    { title: "The Godfather", rating: 9.2, image: "assets/images/godfather.jpg" },
    { title: "The Dark Knight", rating: 9.0, image: "assets/images/dark_knight.jpg" },
    { title: "12 Angry Men", rating: 9.0, image: "assets/images/12_angry_men.jpg" },
    { title: "Schindler's List", rating: 8.9, image: "assets/images/schindler.jpg" },
    { title: "Pulp Fiction", rating: 8.9, image: "assets/images/pulp_fiction.jpg" },
    { title: "LOTR: The Return Of The King", rating: 8.9, image: "assets/images/lotr.jpg" },
    { title: "The Good, the Bad and the Ugly", rating: 8.8, image: "assets/images/good_bad_ugly.jpg" },
    { title: "Fight Club", rating: 8.8, image: "assets/images/fight_club.jpg" },
    { title: "Forrest Gump", rating: 8.8, image: "assets/images/forrest_gump.jpg" },
    { title: "Inception", rating: 8.8, image: "assets/images/inception.jpg" },
    { title: "The Matrix", rating: 8.7, image: "assets/images/matrix.jpg" },
    { title: "Goodfellas", rating: 8.7, image: "assets/images/goodfellas.jpg" },
    { title: "The Empire Strikes Back", rating: 8.7, image: "assets/images/empire_strikes_back.jpg" },
    { title: "One Flew Over the Cuckoo's Nest", rating: 8.7, image: "assets/images/one_flew_over.jpg" },
    { title: "Se7en", rating: 8.6, image: "assets/images/se7en.jpg" },
    { title: "The Silence of the Lambs", rating: 8.6, image: "assets/images/silence_of_the_lambs.jpg" },
    { title: "It's a Wonderful Life", rating: 8.6, image: "assets/images/wonderful_life.jpg" },
    { title: "Saving Private Ryan", rating: 8.6, image: "assets/images/saving_private_ryan.jpg" },
    { title: "Spirited Away", rating: 8.6, image: "assets/images/spirited_away.jpg" }
];

let movie1, movie2;
let score = 0;
let rounds = 0;

console.log('Initial game variables set');

function getRandomMovie() {
    const index = Math.floor(Math.random() * movies.length);
    return movies[index];
}

console.log('Random movie function added');

function displayMovies() {
    movie1 = getRandomMovie();
    movie2 = getRandomMovie();
    while (movie1 === movie2) {
        movie2 = getRandomMovie();
    }
    document.getElementById('title1').innerText = movie1.title;
    document.getElementById('image1').src = movie1.image;
    document.getElementById('title2').innerText = movie2.title;
    document.getElementById('image2').src = movie2.image;
    document.getElementById('result').innerText = '';
    document.getElementById('next').style.display = 'none';
    enableMovieCards();

    console.log('Movies displayed:', movie1.title, 'vs', movie2.title);
}

function enableMovieCards() {
    document.getElementById('movie1').classList.remove('disabled');
    document.getElementById('movie2').classList.remove('disabled');
}

function disableMovieCards() {
    document.getElementById('movie1').classList.add('disabled');
    document.getElementById('movie2').classList.add('disabled');
}

console.log('Functions to enable and disable movie cards added');

function guess(movieNumber) {
    if (rounds >= 10) return; // Freeze game after 10 rounds

    console.log('Guess button clicked for movie', movieNumber);
    const guessedMovie = movieNumber === 1 ? movie1 : movie2;
    const otherMovie = movieNumber === 1 ? movie2 : movie1;

    if (guessedMovie.rating >= otherMovie.rating) {
        document.getElementById('result').innerText = 'Correct! ' + guessedMovie.title + ' has a rating of ' + guessedMovie.rating;
        score++;
    } else {
        document.getElementById('result').innerText = 'Wrong! ' + guessedMovie.title + ' has a rating of ' + guessedMovie.rating + ', but ' + otherMovie.title + ' has a rating of ' + otherMovie.rating;
    }
    rounds++;
    document.getElementById('rounds').innerText = rounds;
    document.getElementById('next').style.display = 'block';
    disableMovieCards();

    if (rounds >= 10) {
        document.getElementById('next').innerText = 'Show Score';
        document.getElementById('next').onclick = showScore;
    }

    console.log('Guess processed');
}

function nextRound() {
    if (rounds < 10) {
        displayMovies();
    }

    console.log('Next round started');
}

function showScore() {
    let title = '';
    if (score === 10) {
        title = 'Cinephile';
    } else if (score >= 7) {
        title = 'Movie Buff';
    } else if (score >= 5) {
        title = 'Movie Fan';
    } else {
        title = 'Normie';
    }

    localStorage.setItem('score', score);
    localStorage.setItem('title', title);
    window.location.href = 'score.html';

    console.log('Score shown and game ended');
}

displayMovies();

console.log('Initial movies displayed');



