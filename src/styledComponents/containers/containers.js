import styled from "styled-components";

export const ButtonNextPrevContainer = styled.div`
  margin: 20px;
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
`;
export const Container = styled.div`
  ${(props) => {
    const { desktop } = props;
    const { mobile } = props;
    return `
    display:${desktop?.display ? desktop?.display : "flex"};
    justify-content:${
      desktop?.justifyContent ? desktop?.justifyContent : "center"
    };
    align-items: ${desktop?.alignItems ? desktop?.alignItems : "center"};
    flex-direction:${desktop?.flexDirection ? desktop?.flexDirection : "row"};
    width:${desktop?.width ? desktop?.width : "auto"};
    height:${desktop?.height ? desktop?.height : "auto"};
    flex-wrap:${desktop?.flexWrap ? desktop?.flexWrap : "wrap"};
    @media (max-width: 800px) {
        display:${mobile?.display ? mobile?.display : "flex"};
        justify-content:${
          mobile?.justifyContent ? mobile?.justifyContent : "center"
        };
        align-items: ${mobile?.alignItems ? mobile?.alignItems : "center"};
        flex-direction:${mobile?.flexDirection ? mobile?.flexDirection : "row"};
        width:${mobile?.width ? mobile?.width : "auto"};
        height:${mobile?.height ? mobile?.height : "auto"};
        flex-wrap:${mobile?.flexWrap ? mobile?.flexWrap : "wrap"};
    }
    `;
  }}
`;
export const AllTitlesContainer = styled.div`
  display: flex;
  width: 60vw;
  justify-content: center;
  flex-wrap: wrap;
  height: 50vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #610094; /* color of the scroll thumb */
    border-radius: 20px;
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const CardContainer = styled.div`
  cursor: pointer;
  width: ${(props) => props.width};
  margin: 10px;
  @media (max-width: 800px) {
    margin: 5px;
  }
`;
export const ModalBackground = styled.div`
  display:${(props) => (props.open ? "flex" : "none")};
  flex-direction:column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color:black;
  z-index: 4;
  top: 0;
  left: 0;
  padding: 0px 20px;
  justify-content: space-around;
`;

export const PosterContainer = styled.div`
width: 250px;
position: relative;
margin-bottom:5vh
`

export const SelectTitleContainer = styled.div`
display:flex;
justify-content:center;
@media (max-width: 800px) {
  margin-top: 5vh;
  flex-direction:column;
}
`
export const HomepageLink = styled.div`
display: flex;
flex-direction: column;
text-align: center;
position: absolute;
bottom: -40px;
width: 100%;
font-size: 15px;
height: 100%;
align-items: center;
background-color: transparent;
justify-content: center;
color: white;
right: 10%;
left: 0px;
`
export const LinkToHomePage = styled.div`
display:none;
background-color:#610094eb;
width:100%;
height:100%;
align-items: center;
justify-content: center;
`
export const InfoContainer = styled.div`
display: flex;
justify-content: center;
margin: 0px 50px;
`
export const Information= styled.div`
width: 450px;
height: 200px;
background: #610094;
padding: 10px;
text-align: start;
display: flex;
align-items: center;
@media (max-width: 800px) {
width:90vw;
}
`
export const CrewContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
@media (max-width: 800px) {
  margin-top:20vw;
  }
`
export const DirectorContainer= styled.div`
display: flex;
width: 15vw;
height: 20vh;
align-items: center;
justify-content: space-around;
@media (max-width: 800px) {
  width:100vw
  }
`
export const ActorsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 15vw;
@media (max-width: 800px) {
  width:50vw;
  margin-bottom:5vh
  }
`
export const SeasonContainer = styled.div`
margin:30px;
`