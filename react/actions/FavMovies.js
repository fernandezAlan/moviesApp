const FavMovie = favMovies => ({
    type: "FAV_MOVIE",
    favMovies,
  }); 

  const fetchFavMovie = function(id){
    return function(dispatch){
        return fetch( `https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
            .then((response) => {
            return response.json()
          })
           .then((movie) => {
            dispatch(FavMovie(movie))
          })

    }
  }

  export default fetchFavMovie