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
${props=>{
    const {desktop} = props 
    const {mobile} = props 
    return `
    display:${desktop?.display ? desktop?.display : 'flex'};
    justify-content:${desktop?.justifyContent ? desktop?.justifyContent : 'center'};
    align-items: ${desktop?.alignItems ? desktop?.alignItems : 'center'};
    flex-direction:${desktop?.flexDirection ? desktop?.flexDirection : 'row'};
    width:${desktop?.width ? desktop?.width : 'auto'};
    height:${desktop?.height ? desktop?.height : 'auto'};
    flex-wrap:${desktop?.flexWrap ? desktop?.flexWrap : 'wrap'};
    @media (max-width: 800px) {
        display:${mobile?.display ? mobile?.display : 'flex'};
        justify-content:${mobile?.justifyContent ? mobile?.justifyContent : 'center'};
        align-items: ${mobile?.alignItems ? mobile?.alignItems : 'center'};
        flex-direction:${mobile?.flexDirection ? mobile?.flexDirection : 'row'};
        width:${mobile?.width ? mobile?.width : 'auto'};
        height:${mobile?.height ? mobile?.height : 'auto'};
        flex-wrap:${mobile?.flexWrap ? mobile?.flexWrap : 'wrap'};
    }
    `
}}
`
export const AllTitlesContainer = styled.div`
display:flex;
width:60vw;
justify-content:center;
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
@media (max-width: 800px){
    width:100vw
}
`

export const CardContainer = styled.div`
cursor:pointer;
width:${(props)=>props.width};
margin:10px;
@media (max-width: 800px){
margin:5px
}
`