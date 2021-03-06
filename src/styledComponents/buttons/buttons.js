import styled from "styled-components";
export const NextPrevButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.disabled ? "#2a0041;" : "#610094")};
  color: white;
  border: 0px;
  border-radius: 30px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  margin: 5px;
  ${(props) =>
    props.disabled
      ? ""
      : `&:active{
  background-color:#380155;
  }`}
  outline: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 800px){
    width: 40px;
    height: 40px;
    font-size: 25px;
  }
`;
export const ButtonFilter = styled.button`
  margin: 10px;
  background-color: transparent;
  border: 0px solid transparent;
  cursor: pointer;
  color: ${(props) => (props.selected ? "white" : "gray")};
  outline: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 800px){
    display:${(props) => (!props.selected ? "none" : "")};
    font-size: 25px;
  }
`;
export const ButtonFilterModal= styled.button`
margin: 10px;
background-color: transparent;
border: 0px solid transparent;
cursor: pointer;
color: ${(props) => (props.selected ? "white" : "gray")};
outline: none;
&:focus {
  outline: none;
}
@media (max-width: 800px){
 width:100px
}
`
export const MediaTypeSelector = styled.button`
  border: solid 0px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  margin: 10px;
  font-size: 30px;
  ${(props) =>
    props.selected
      ? `color:white;
    border-bottom: solid 3px #610094;
     `
      : `color:gray;
      
      `}
  outline: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 800px){
    font-size: 35px;
  }
`;
export const MoreButton = styled.button`
width: 40px;
height: 40px;
background-color: #610094;
color: white;
border: 0px;
border-radius: 30px;
cursor: pointer;
margin: 5px;
outline: none;
font-size: 25px;
&:focus {
  outline: none;
}
`
export const SearchButton = styled.button`
  color: white;
  background-color: #610094;
  height:40px;
  border: 0px;
  padding:5px;
  border-radius: 0px 10px 10px 0px;
  width: 80px;
  cursor: pointer;
  outline: none;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #380155;
  }
`;
