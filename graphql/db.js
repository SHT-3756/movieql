let movies = [
  {
    id: 0,
    name: "heetae",
    score: 3,
  },
  {
    id: 1,
    name: "kim",
    score: 2,
  },
  {
    id: 2,
    name: "You",
    score: 3,
  },
  {
    id: 3,
    name: "Me",
    score: 99,
  },
  {
    id: 4,
    name: "Park",
    score: 5,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movies) => movies.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
