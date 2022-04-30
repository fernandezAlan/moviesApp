import styled from "styled-components";

export const SearchInputStyle = styled.input`
  background-color: #150050;
  color: white;
  border: solid 2px #610094;
  width: 250px;
  padding:5px;
  border-radius: 10px 0px 0px 10px;
  height:40px;
  ::placeholder {
    color: white;
  }
  outline: none;
  &:focus {
    outline: none;
  }
`;
