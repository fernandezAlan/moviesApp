import React from "react";
import classes from './episode.module.css'
import Image from "../Images/Images";
const Episode  = ({imgURL,title,episodeNumber,overview,airDate})=>{
    return(
    <div className={classes.container}>
        <section>
            <div className={classes.img_container}>
                <Image singleURL={imgURL}/>
            </div>
        </section>
        <section>
            <div className={classes.overview_container}>
                <p>{overview}</p>
            </div>
            <strong>{'título: '}</strong><span>{title}</span><br/>
            <strong>{'N° de episodio: '}</strong><span>{episodeNumber}</span><br/>
            <strong>{'fecha de salida: '}</strong><span>{airDate}</span>
            
        </section>
        
    </div>
    )
}

export default Episode