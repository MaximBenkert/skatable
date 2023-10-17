import React from "react";
import { Spot } from "../models/Spot";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #9cbac6;
  margin: 12px;
  padding: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.big``;

const DetailsButton = styled.button`
  background-color: transparent;
  border: 2px solid #1974d4;
  color: #1974d4;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #1974d4;
    color: #fff;
  }
`;


type CardProps = {
    spot: Spot;
};

const SpotCard = (props: CardProps) => {
    const navigate = useNavigate();

    return (
        <CardContainer>
            <CardTitle>{props.spot.name}</CardTitle>
            <DetailsButton onClick={() => navigate(`/details/${props.spot.id}`)}>
                Details
            </DetailsButton>
        </CardContainer>
    );
};

export default SpotCard;

