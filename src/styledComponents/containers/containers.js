import styled from "styled-components";


export const Container= styled.div`
display:flex;
justify-content:center;
align-items: center;
`
export const AllTitlesContainer = styled.div`
display:flex;
width:70vw;
flex-wrap:wrap;
height: 50vh;
overflow-y: scroll;
&::-webkit-scrollbar{
    width: 5px; 
 };
&::-webkit-scrollbar-track{
    background: transparent;
};
&::-webkit-scrollbar-thumb{
    background-color: #610094;    /* color of the scroll thumb */
    border-radius: 20px; 
};

`