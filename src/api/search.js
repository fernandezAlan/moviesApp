import axios from 'axios'
export const searchTitle = async ({name,page=1}) => {
  
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=cc623e62050ef7c617de4681fae90c0e&language=es&query=${name}&page=${page}`
        );
        console.log('searchTitle',response)
        resolve(response.data);
      } catch (error) {
        reject("error at searchMovie:", error);
      }
    });
  };