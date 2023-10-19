import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationContainer = styled.nav`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  z-index: 999;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 10%;
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
                    <NavigationLink to="/">SpotMap</NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink to="/add">Add a Spot</NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink to="/gallery">Spot Gallery</NavigationLink>
                </NavigationItem>
            </NavigationList>
        </NavigationContainer>
    );
};

export default Navigation;
