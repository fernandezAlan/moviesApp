import axios from 'axios'

export const selectPerson = async function (id) {
    return new Promise(async (resolve, reject) => {
      try {
        const personData = await axios.get(
          `https://api.themoviedb.org/3/person/${id}?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
        );
        const PersonImages = await axios( `https://api.themoviedb.org/3/person/${id}/images?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`)
        PersonImages.data.profiles.length=4
        personData.data.allImg= PersonImages.data
        resolve(personData.data);
      } catch (error) {
        throw new Error("error at selectPerson:", error);
      }
    });
  };

  export const getPersonCredits = async function (id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
        );
        resolve(response.data);
      } catch (error) {
        throw new Error("error at getPopularTvSeries:", error);
      }
    });
  };