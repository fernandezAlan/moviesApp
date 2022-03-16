import React from "react";
import classes from './informationContainer.module.css'

const InformationContainer = ({information})=>{

return(
<section className={classes.container}>
    <p className={classes.information}>{information}</p>
</section>
)

}

export default InformationContainer