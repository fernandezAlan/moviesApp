import React from "react";
import classes from './selectionBar.module.css'

const SelectionBars = ({labels})=>{

    return(
    <>
    {labels.map(label=>(<div className={classes.bar}>{label}</div>))}
    </>
    )

}
export default SelectionBars