const filmsWatched = (films) => {
  return films.length > 0
    ? films.map((film) => ` ${film.title} del año ${film.year}`)
    : "ninguna";
};

const moviesSeen = (movies) => {
  let watched = [];
  let unseen = [];
  movies.forEach((movie) => {
    movie.seen ? watched.push(movie) : unseen.push(movie);
  });
  return `Las peliculas que has visto son:${filmsWatched(
    watched
  )} \nLas peliculas no que has visto son:${filmsWatched(unseen)}`;
};

let peliculas = [
  { title: "Training Day", year: 2001, seen: true },
  { title: "Harry Potter y la piedra filosofal", year: 2001, seen: true },
  { title: "Maktub", year: 2011, seen: false },
];
console.log(moviesSeen(peliculas));
