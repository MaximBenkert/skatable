import React from "react";
import { Spot } from "../models/Spot";
import styled from "styled-components";
import SpotCard from "./SpotCard";

const GalleryContainer = styled.div`
  background-color: #9cbac6;
  padding: 1rem;
`;

const GalleryTitle = styled.h2`
  font-size: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpotsContainer = styled.div`
  padding-bottom: 720px;
`;

type Props = {
    spots: Spot[];
};

const SpotGallery = (props: Props) => {
    return (
        <GalleryContainer>
            <GalleryTitle>Gallery</GalleryTitle>
            <SpotsContainer>
                {props.spots.map((spot) => (
                    <SpotCard key={spot.id} spot={spot} />
                ))}
            </SpotsContainer>
        </GalleryContainer>
    );
};

export default SpotGallery;
