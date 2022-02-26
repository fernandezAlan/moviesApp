import React from "react"

const MoviesComp = function({selectedMovie}){
    let selectMovie = selectedMovie.selectedMovie
    let list = function(){
        return " peli no disponible"
    };

    
    
    if(selectMovie==="no seleccionaste ninguna movie"){
        list =function(){
            return (
                <p>no seleccionaste ninguna movie!</p>
                )
                
            }
        } 
    else{
        
        list = function(){
            return (<div class="row selecMovie">
                    <div class="col-md-6">
                        <h1>{selectMovie.Title}</h1>
                        <p> <strong>year:</strong> {selectMovie.Year}</p>
                        <p> <strong>director:</strong>{selectMovie.Director}</p>
                        <p><strong>plot:</strong>{selectMovie.Plot} </p>
                        <p><strong>genre:</strong>{selectMovie.Genre}</p>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                             <img src={selectMovie.Poster} />
                        </div>
                    </div>


                           
                           
                    </div>

                )

        }
    }
    


    return (
        <div class="container">
            {list()}
        </div>

    )
}

export default MoviesComp;