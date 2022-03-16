import axios from 'axios'

export const getCollection = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/collection/${id}?api_key=cc623e62050ef7c617de4681fae90c0e&language=es`
        );
        resolve(response.data);
      } catch (error) {
        throw new Error("error at getCollection:", error);
      }
    });
  };