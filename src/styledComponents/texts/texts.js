import styled from "styled-components";

export const PrincipalTitle = styled.h1`
  color: white;
  font-size: 40px;
  cursor: pointer;
  margin: 10px;
`;

export const RateNumber = styled.span`
  color: ${(props) => {
    if (props.rate > 7) return "green";
    else if (props.rate > 4) return "yellow";
    else return "red";
  }};
  margin-left: 10px;
`;

export const DateContainer = styled.span`
  margin-left: 10px;
`;
export const SubTitle = styled.h4`
  text-align: center;
  width: 100%;
`;

export const ActualPage = styled.span`
font-size: 20px;
@media (max-width: 800px){
  font-size: 25px;
}
`