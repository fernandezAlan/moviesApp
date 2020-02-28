import axios from "axios"
const movieAction = movies => ({
    type: "UPDATE_MOVIES",
    movies,
  }); 

   const fetchMovies = function(){
    return function(dispatch){
        return axios("https://www.omdbapi.com/?apikey=20dac387&s=batman")
            .then((response) => {
            return response.data
          })
           .then((movies) => {
            dispatch(movieAction(movies))
          })

    }
  }

export default fetchMovies