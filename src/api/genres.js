import axios from 'axios'
export const getMovieGenres= async function () {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=cc623e62050ef7c617de4681fae90c0e&language=es"
        );
        resolve(response.data.genres);
      } catch (error) {
        throw new Error("error at getGenres:", error);
      }
    });
  };