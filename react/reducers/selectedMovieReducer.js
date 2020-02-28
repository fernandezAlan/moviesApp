const initialState = { selectedMovie: "no seleccionaste ninguna movie" };

export default function SelectedMovie (state = initialState, action) {
  switch (action.type) {
    case "SELECTED_MOVIE": 
       return Object.assign({}, state, { selectedMovie: action.selectedMovie });
    default: 
       return state;
  }
}