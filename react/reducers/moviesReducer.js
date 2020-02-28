const initialState = { movies: "aun no hay movies aqui!" };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_MOVIES": 
       return Object.assign({}, state, { movies: action.movies });
    default: 
       return state;
  }
}