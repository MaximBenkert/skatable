import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled.li`
  color: #6699CC;
  text-align: center;
  padding: 16px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const Navigation = () => {
    return (
        <NavigationContainer>
            <NavigationList>
                <NavigationItem>
                    <NavigationLink to="/">Spots</NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink to="/add">Add</NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink to="/gallery">Gallery</NavigationLink>
                </NavigationItem>
            </NavigationList>
        </NavigationContainer>
    );
};

export default Navigation;
