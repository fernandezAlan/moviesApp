import React from "react";
import {
  useNavigate
} from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import { PrincipalTitle } from "../../styledComponents/texts/texts";
import {
  Container,
  SubContainer,
} from "../../styledComponents/containers/containers";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container  desktop={{justifyContent:"start"}}>
      <SubContainer desktop = {{width:"50vw",justifyContent:"space-evenly"}}>
        <PrincipalTitle onClick={() => navigate("/")}>MOVIE APP</PrincipalTitle>
        <SearchInput/>
      </SubContainer>
    </Container>
  );
};

export default Navbar;
