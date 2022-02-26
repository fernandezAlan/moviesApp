import React, { useEffect } from "react";
import { Link,Router } from "react-router-dom";
import classes from './home.module.css'
const Home = ()=>{
   
return(
    <div className={classes.container}>
            <Link to="/movies">
                <button className={classes.button}>Películas</button>
            </Link>
            <Link to="/tvseries">
                <button className={classes.button}>series de televisión</button>
            </Link>
    </div>
)
}
export default Home