import React from "react"
import { Link } from 'react-router-dom'


const MoviesComp = function({movies}){
    
    let list = "";
    if(movies.movies==="aun no hay movies aqui!"){
        list = <p>aun no hay movies aqui!</p>
    }
    else{
       
        list = movies.movies.Search.map(function(mvs,index){
            return(<div>
                    <Link to ={`/movies/${mvs.imdbID}`}>
                        <div className="col-md-auto borderMovie">
                            <h3 className="titleFont" key={index}>{mvs.Title}</h3><br/>
                            <img className="imgW" src={mvs.Poster}/>
                        </div>
                    </Link>
                     </div>
                    
                )
            })
        }
        return(
            <div>
                <img className="logoPrin" src="https://code.4noobz.net/wp-content/uploads/2018/10/OMDB-API.png" alt=""></img>
                <div className="container cnt">
                <div  className="row">
                            {list}
                </div>
                </div>
            </div>
                )

}
                    
    export default MoviesComp
        
                
                        
                        
                    
                    


    
    
                    
                   

              

        
        
       
        
    
    
    
