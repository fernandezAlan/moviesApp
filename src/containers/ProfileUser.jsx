import React from "react"
 const ProfileUser= function(){
     const seguidos = function(){
         return (
             <h5 style={{marginLeft:"35%"}}>no estas siguiendo a nadie</h5>
         )
     }
     const favorites = function(){
         return (
             <h5 style={{marginLeft:"200%"}}>
                 todavia no tienes pelis favoritas!
             </h5>
         )
     }
return(
    <div>
        <div style={{marginLeft:"20%",height:"200px"}} className="photoProf_seting">
                <img style={{float:"left",marginLeft:"25%"}} align="rigth" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgQLo3jW1M451A5_pAyK7XVfUVHcJmvXwv6Y1k1nDGK1Gg3BNi" alt=""/>
                <h3>Jack Torrance</h3>  
        </div>
        <div  className="container">
            <div className="row">
                <div className="col-md-6">
                    {seguidos()}
                </div>
                <div className="row">
                    <div className="col-md-6" >
                    {favorites()}
                    </div>
                </div>
            </div>
        </div>
    </div>

    






)
 }
 export default ProfileUser

 {/*style={{backgroundColor:'black', height:'300px'}}*/}