import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

const HeaderText = styled.h1`
  font-weight: bold;
  font-family: Impact;
  color: #6699CC;
  margin: 0;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderText>Skatable</HeaderText>
        </HeaderContainer>
    );
}
