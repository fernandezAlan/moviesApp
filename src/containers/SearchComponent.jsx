import React from "react"

const SearchComponent = function({foundMovie}){
    console.log("ESTE ES EL FOUND MOVIE", foundMovie)
    
    let list = function(){
        return " peli no disponible"
    };

    
    
    if(foundMovie==="buscando peliculas"){
        list =function(){
            return (
                <p>estamos buscando tu pelicula!</p>
                )
                
            }
        } 
    else{
        
        list = function(){
            
            return (<div>
                        <div  class="col-md-6 searchMovie">
                            <h1>{foundMovie.foundMovie.Title}</h1>
                            <h3>{foundMovie.foundMovie.Year} </h3>
                            <p>{foundMovie.foundMovie.Plot} </p>
                        </div>
                        <div class="row searchMovie" >
                            <div class="col-md-6 searchMovie">
                                <img src= {foundMovie.foundMovie.Poster} />
                            </div>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div class="row selecMovie">
                {list()}
            </div>
           )
        }
        export default SearchComponent;


                

                
    

       
           

