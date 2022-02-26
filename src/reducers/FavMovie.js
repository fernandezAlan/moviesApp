const initialState = { favMovies: ["aun no tenes favoritos"]};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case "FAV_MOVIE": 
       return Object.assign({}, state, { favMovies: action.favMovies });
    default: 
       return state;
  }
}