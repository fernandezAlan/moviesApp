import React, { useState } from "react";
import classes from './searchInput.module.css'
import { useDispatch,useSelector } from "react-redux";
import { addFindMovie } from "../../reducers/moviesReducer";
import { useNavigate } from "react-router-dom";
import { SearchButton } from "../../styledComponents/buttons/buttons";
const SearchInput = ()=>{
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
        <SearchButton
        onClick={startToSearch}
        >buscar</SearchButton>
    </div>
    )
}
export default SearchInput