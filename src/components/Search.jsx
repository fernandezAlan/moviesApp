import { connect } from "react-redux"
import React from "react"
import SearchComponent from "../containers/SearchComponent"


class Search extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
        <div>
             <SearchComponent foundMovie={this.props.foundMovie} />
        </div>

        )
    }

}

const mapStateToProps = function (state) {
    return {
        foundMovie: state.foundMovie
    };
}

export default connect(mapStateToProps)(Search);


            