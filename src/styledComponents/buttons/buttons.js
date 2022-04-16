import styled from "styled-components";

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
`;
export const MediaTypeSelector = styled.button`
  border: solid 0px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  margin: 10px;
  font-size:30px;
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
`;
