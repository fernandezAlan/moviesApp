import React from "react";
import classes from './moviesContainer.module.css'
import {toggleElement} from '../../utils/index'
const TitleContainer=({imgURL,name, selectMovieHandle, size})=>{

    const AllSizes={
        's':'70px',
        'm':'100px',
        'l':'150px'
    }

return(
    <section 
        className={classes.container}
        style={{width:AllSizes[size]}}
        onClick={selectMovieHandle}  
        onMouseEnter={()=>toggleElement('title_'+name,'flex','enter')}
        onMouseLeave={()=>toggleElement('title_'+name,'flex','leave')}
        >
            <div className={classes.sub_container}>
                <div 
                id={'title_'+name}
                className={classes.tittle}>
                <span>{name}</span>
                </div>
                <img
                className={classes.img_movie} 
                src={ imgURL ? 'https://image.tmdb.org/t/p/w500'+imgURL : 'https://www.tiendalincoln.com.py/static/products/DEFAULT/846242/SMALL/846242+LENTES+DE+SEGURIDAD.jpg'} 
                alt='movie_poster'/>
            </div>
    </section>
)
}
export default TitleContainer