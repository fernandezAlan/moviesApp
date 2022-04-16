import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import { PrincipalTitle } from "../../styledComponents/texts/texts";
import { Container } from "../../styledComponents/containers/containers";
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container onClick={()=>navigate('/')}>
        <PrincipalTitle>MOVIE APP</PrincipalTitle>
        <img
          style={{
            width: "50px",
            height: "50px",
            margin: "10px",
          }}
          src="./icon_title.png"
        />
    </Container>
  );
};

export default Navbar;
