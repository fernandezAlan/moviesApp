import axios from "axios";

export const getMovies = async function () {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cc623e62050ef7c617de4681fae90c0e&language=es"
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
      resolve(response.data);
    } catch (error) {
      throw new Error("error at selectedMovie:", error);
    }
  });
};

export const getMovieCredits = (movieId)=>{
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
}