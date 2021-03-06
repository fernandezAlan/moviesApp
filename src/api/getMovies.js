import axios from "axios";

export const getMovies = async function ({type,page}) {
  console.log('getMovies',{type,page})
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=cc623e62050ef7c617de4681fae90c0e&language=es&page=${page}`
      );
      resolve(response.data);
    } catch (error) {
      throw new Error("error at getMovies:", error);
    }
  });
};

export const selectedMovie = (movieId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
      );
      const similarMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
      );

      response.data.similarMovies = similarMovies.data.results.slice();
      similarMovies.data.results.length = 4;
      response.data.previewSimilarMovies = similarMovies.data.results.slice();

      resolve(response.data);
    } catch (error) {
      throw new Error("error at selectedMovie:", error);
    }
  });
};

export const getMovieCredits = (movieId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
      );
      resolve(response.data);
    } catch (error) {
      throw new Error("error at selectedMovie:", error);
    }
  });
};

