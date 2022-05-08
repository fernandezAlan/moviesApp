import styled from "styled-components";

export const MediaTypeLabel = styled.div`
  width: 100px;
  color: white;
  background-color: #600094e0;
  padding: 5px;
  height: 30px;
`;

export const GenreLabel = styled.div`
  width: 120px;
  color: ${(props) => (props.selected ? "white" : "gray")};
  background-color: ${(props) => (props.selected ? "#610094" : "transparent")};
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  font-size: 12px;
  &:hover {
    background-color: #610094;
    color:white;
  }
  &:active {
    background-color: #250038;
  }
  @media (max-width: 800px) {
    font-size: 15px;
    width: 100px;
  }
`;
 export const NameLabel = styled.p`
 background-color:#610094;
 height:30px;
 z-index:2;
 width:100px;
 overflow: hidden;
 white-space: nowrap;
text-overflow: ellipsis;
 `