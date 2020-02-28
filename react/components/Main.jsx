import React from 'react';
import { connect } from "react-redux"
import fetchMovies from "../actions/moviesActions"
import MoviesComp from "../containers/MoviesComp"





 class Main extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        this.props.getMovies()
    }
    render(props){
        
        return(
            <div>
                <MoviesComp movies={this.props.movies}  />
                
            </div>
        )
    }
}

        
        


const mapStateToProps = function (state) {
    return {
        favMovies: state.favMovies,
        movies: state.movies
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        FavMovies:(idFav) => dispatch(fetchFavMovie(idFav)),
        getMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);