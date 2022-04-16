import axios from 'axios'

export const getTvSeries = async function (type) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${type}?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
        );
        resolve(response.data);
      } catch (error) {
        throw new Error("error at getPopularTvSeries:", error);
      }
    });
  };

  export const selectTvSerie = async function (id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
        );
        resolve(response.data);
      } catch (error) {
        throw new Error("error at getPopularTvSeries:", error);
      }
    });
  };

  export const getTvSerieCredits = async function (id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}/credits?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
        );
        resolve(response.data);
      } catch (error) {
        throw new Error("error at getPopularTvSeries:", error);
      }
    });
  };

export const getSeasonDetails = async function ({id,seasonNumber}) {
  console.log('getSeasonDetails',seasonNumber)
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
      );
      resolve(response.data);
    } catch (error) {
      throw new Error("error at getPopularTvSeries:", error);
    }
  });
};
