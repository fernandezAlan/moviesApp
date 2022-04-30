import styled from "styled-components";

export const ButtonNextPrevContainer= styled.div`
margin:20px
`
export const SubContainer = styled.div`
display:flex;
justify-content:${props=>props.justifyContent ? props.justifyContent : 'center'};
align-items: ${props=>props.alignItems ? props.alignItems : 'center'};
flex-direction: ${props=>props.flexDirection ? props.flexDirection : 'row'};
width: ${props=>props.width ? props.width : 'auto'};
height:${props=>props.height ? props.height : 'auto'};
flex-wrap:${props=>props.flexWrap ? props.flexWrap : 'wrap'};
`
export const Container= styled.div`
display:flex;
justify-content:${props=>props.justifyContent ? props.justifyContent : 'center'};
align-items: ${props=>props.alignItems ? props.alignItems : 'center'};
flex-direction: ${props=>props.flexDirection ? props.flexDirection : 'row'};
width: ${props=>props.width ? props.width : 'auto'};
height:${props=>props.height ? props.height : 'auto'};
flex-wrap:${props=>props.flexWrap ? props.flexWrap : 'wrap'};
`
export const AllTitlesContainer = styled.div`
display:flex;
width:60vw;
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