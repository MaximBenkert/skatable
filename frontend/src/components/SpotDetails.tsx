import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MapForDetails from "./MapForDetails";
import { Spot } from "../models/Spot";

const DetailContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #9CBAC6;
  height: 70%;
`;

const CardContainer = styled.div`
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9CBAC6;
`;

const CardTitle = styled.big`
  font-size: 2.2rem;
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: inherit;
  min-width: 80%;
`;

const Button = styled.button`
  background-color: #1bbea0;
  color: inherit;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: #1974d4; /* Change to your desired hover color */
    color: #fff;
  }
`;

type DetailProps = {
    loadSpotById: (id: string) => void;
    spot: Spot;
};

export default function SpotDetails(props: DetailProps) {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            props.loadSpotById(id);
        }
        // eslint-disable-next-line
    }, [id]);

    return (
        <DetailContainer>

            {props.spot ? (
                <CardContainer>
                    <CardTitle>{props.spot.name}</CardTitle>
                </CardContainer>
            ) : (
                <LoadingText>... loading</LoadingText>
            )}

            <MapForDetails spot={props.spot} />

            <ButtonGroup>
                <Button onClick={() => navigate(`/`)}>Back</Button>
                <Button onClick={() => navigate(`/edit/${props.spot.id}`)}>
                    Edit
                </Button>
            </ButtonGroup>
        </DetailContainer>
    );
}
