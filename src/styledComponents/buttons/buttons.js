import styled from "styled-components";

export const ButtonFilter = styled.button`
margin : 10px;
background-color: transparent;
border: 0px solid transparent;
cursor: pointer;
color : ${props=>props.selected ? 'white' : 'gray'};
outline: none;
&:focus {
    outline: none;
}
`
