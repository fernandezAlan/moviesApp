import React from 'react';
import { connect } from "react-redux"
import fetchSelectedMovie from "../actions/selectedMovie"
import SelectedMovieComp from "../containers/SelectedMovieComp"



class SelectedMovie extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.onlyMovie()
    }
    render(props){
        return(
            <div>
               <SelectedMovieComp selectedMovie={this.props.selectedMovie}/>
            </div>
        )
    }
}
    


const mapStateToProps = function (state) {
    return {
        selectedMovie: state.selectedMovie
    };
}


const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {

        onlyMovie: () => dispatch(fetchSelectedMovie(ownProps.match.params.id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectedMovie)
        


       
       
