import axios from "axios";
export const getGenres = async function ({ mediaType }) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
      );
      resolve(response.data.genres);
    } catch (error) {
      reject("error at getGenres:", error);
    }
  });
};

export const getTitleGenre = async function ({ mediaType,genreId,page=1}) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/${mediaType}?with_genres=${genreId}&sort_by=popularity.desc&api_key=cc623e62050ef7c617de4681fae90c0e&language=es&page=${page}`
      );
      resolve(response.data)
    } catch (err) {
      reject("error at getTitleGenre:", error);
    }
  });
};
