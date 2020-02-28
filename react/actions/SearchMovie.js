const SearchMovie = foundMovie => ({
    type: "FOUND_MOVIE",
    foundMovie,
  }); 

  const fetchSearchMovie = function(title){
    return function(dispatch){
        return fetch( `https://www.omdbapi.com/?apikey=20dac387&t=${title}`)
            .then((response) => {
            return response.json()
          })
           .then((movie) => {
            dispatch(SearchMovie(movie))
          })

    }
  }

 export default fetchSearchMovie;