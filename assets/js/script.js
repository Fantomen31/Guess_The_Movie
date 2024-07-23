console.log('Script loaded');

const movies = [
    { title: "The Shawshank Redemption", rating: 9.3, image: "assets/images/shawshank.jpg" },
    { title: "The Godfather", rating: 9.2, image: "assets/images/godfather.jpg" },
    { title: "The Dark Knight", rating: 9.0, image: "assets/images/dark_knight.jpg" },
    { title: "12 Angry Men", rating: 9.0, image: "assets/images/12_angry_men.jpg" },
    { title: "Schindler's List", rating: 8.9, image: "assets/images/schindler.jpg" },
    { title: "Pulp Fiction", rating: 8.9, image: "assets/images/pulp_fiction.jpg" },
    { title: "The Lord of the Rings: The Return of the King", rating: 8.9, image: "assets/images/lotr.jpg" },
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

