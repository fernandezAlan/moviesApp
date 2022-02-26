const initialState = { foundMovie: "buscando peliculas" };

export default function foundMovie (state = initialState, action) {
  switch (action.type) {
    case "FOUND_MOVIE": 
       return Object.assign({}, state, { foundMovie: action.foundMovie });
    default: 
       return state;
  }
}