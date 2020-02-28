import React from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import fetchSearchMovie from "../actions/SearchMovie"





 class SearchMovie extends React.Component {
    constructor(props){
        super(props)

        this.handleSubmit= this.handleSubmit.bind(this)
        this.nameChange= this.nameChange.bind(this)
        this.nameMovie= "";
        
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.getSelectedMovie(this.nameMovie)
        this.props.redirect.history.push('/search')
        
    }
    nameChange(event){
       
        this.nameMovie= event.target.value
        console.log(this.nameMovie)
       
    }
    render(props){
        return(
            <div className="sidebarSearch">
                <h3 class="OMDB">OMDB</h3>
                    <h5 className=" textAl">
                        <Link to="/profile">
                            <img className="profilePhoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgQLo3jW1M451A5_pAyK7XVfUVHcJmvXwv6Y1k1nDGK1Gg3BNi" alt=""/><br/>
                                ir al perfil <br/>
                               
                        </Link>
                    </h5>
                <hr/>
                <form className="form-inline buscador " onSubmit={this.handleSubmit}>
                     <input type="text" className="form-control form-control-sm mr-3 w-75 buscadorText" value={this.props.nameMovie} onChange={this.nameChange} name="movieSearch" placeholder="buscar pelicula"></input> 
                     <button type="submit" class="btn btn-dark botonSub">buscar</button>
                </form>
                <h4 style={{marginBottom:"100%"}} className="textAl">
                    <Link to="/movies">INICIO</Link>
                </h4>
                <footer>
                <h4 className="textAl">
                <Link to="/logout">SALIR</Link>
                </h4>
                </footer>
        </div>
        )
    }
}

                
                
                
               
                     
                
                
       

      
               
      

        
        
        
      
      
     
       



                    


        
        


const mapStateToProps = function (state) {
    return {
        foundMovie: state.foundMovie
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ownProps!!!!!!",ownProps)
    return {
        
        getSelectedMovie: (nameOfMovie) => dispatch(fetchSearchMovie(nameOfMovie))
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchMovie);


     
      
      {/* */}