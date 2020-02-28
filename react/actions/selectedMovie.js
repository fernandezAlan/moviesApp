const selectedMovie = selectedMovie => ({
    type: "SELECTED_MOVIE",
    selectedMovie,
  }); 

  const fetchSelectedMovie = function(id){
    return function(dispatch){
        return fetch( `https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
            .then((response) => {
            return response.json()
          })
           .then((movie) => {
            dispatch(selectedMovie(movie))
          })

    }
  }

 export default fetchSelectedMovie;