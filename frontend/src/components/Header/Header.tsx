import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  z-index: 1000; /* Stellen Sie sicher, dass der Header über anderen Inhalten liegt */
  height: 5%;
`;

const HeaderText = styled.h1`
  font-weight: bold;
  font-family: Impact, serif;
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
