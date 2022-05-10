import React, { useState } from "react";
import classes from './searchInput.module.css'
import { useDispatch,useSelector } from "react-redux";
import { addFindMovie } from "../../reducers/moviesReducer";
import { useNavigate } from "react-router-dom";
import { SearchButton } from "../../styledComponents/buttons/buttons";
import { SearchInputStyle } from "../../styledComponents/inputs/inputs";
import {clearTitlesFound} from '../../reducers/TitlesFoundReducer'
const SearchInput = ()=>{
    const [value,setValue] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (event)=>{
        setValue(event.target.value)
    }
  
    return(
    <div>
        <SearchInputStyle 
        type='text'
        value={value}
        onChange={handleChange}
        placeholder={'busca una película o serie'}
        />
        <SearchButton
        onClick={()=> {
            dispatch(clearTitlesFound())
            navigate('/search/'+value.replace(' ','%20'))
            setValue('')
        }}
        >buscar</SearchButton>
    </div>
    )
}
export default SearchInput