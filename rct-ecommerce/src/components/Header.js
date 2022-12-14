import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import {Image} from "@chakra-ui/react" 

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <Image width={"150px"} src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="my logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
