import React, { useState } from "react";
import classes from './searchInput.module.css'
import { useDispatch,useSelector } from "react-redux";
import { addFindMovie } from "../../reducers/moviesReducer";
import { useNavigate } from "react-router-dom";
const Search = ()=>{
    const [value,setValue] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (event)=>{
        setValue(event.target.value)
    }
    const startToSearch = ()=>{
        navigate('/search/'+value.replace(' ','%20'))
    }
    return(
    <div>
        <input 
        type='text'
        value={value}
        onChange={handleChange}
        />
        <button
        onClick={startToSearch}
        >buscar pelicula</button>
    </div>
    )
}
export default Search