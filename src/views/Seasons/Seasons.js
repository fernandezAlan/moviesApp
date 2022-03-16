import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addSelectedTvSerie, clearSelectedTvSerie } from "../../reducers/TvShowsReducer";
import Image from "../../components/Images/Images";
import classes from './season.module.css'

const Seasons = ()=>{
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selectedTvSerie = useSelector(state=>state.tvSeries.selectedTvSerie)
    const seasons = selectedTvSerie?.seasons
    useEffect(()=>{
            dispatch(addSelectedTvSerie(params.id))
        return ()=>dispatch(clearSelectedTvSerie())
    },[])
    
    console.log('seasons',seasons)
    return(
    <div className={classes.container}>
        <h3>{'todas las temporadas de '+selectedTvSerie?.name}</h3>
        <div className={classes.sub_container}>
        {seasons ? (
            seasons.map(season=>(
                <section 
                className={classes.content_container}
                onClick={()=>navigate(`/tv/${selectedTvSerie.id}/season/${season.season_number}/details`)}
                >
                    <div>{season.name}</div>
                    <div className={classes.img_container}>
                        <Image singleURL={season.poster_path}/>
                    </div>
                </section>
            ))
        ) : null}
        </div>
    </div>
    )
}

export default Seasons