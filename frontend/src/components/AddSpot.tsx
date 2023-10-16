import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SpotMapComponent from "./SpotMapComponent";
import { Spot } from "../models/Spot";

const AddSpotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #9cbac6;
  height: 80%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #6699cc;
  border-radius: 10px;
  height: 30%;
`;

const FormTextField = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #1974d4;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #6699cc;
  }
`;

const SaveButton = styled.button`
  background-color: #e76513;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

type AddSpotProps = {
    spots: Spot[];
    addSpot: (newSpot: Spot) => void;
};

export default function AddSpot(props: AddSpotProps) {
    const navigate = useNavigate();
    const [spot, setSpot] = useState<Spot>({
        id: "",
        coordinates: { latitude: 50.9412, longitude: 6.9582 },
        name: "",
    });

    const mapHeight = `60%`;

    function onSaveSpot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (spot.name === undefined || spot.name === "") {
            console.error("Name is required");
            return;
        }
        props.addSpot(spot);
        navigate("/");
    }

    return (
        <AddSpotContainer>
            <SpotMapComponent
                spot={spot}
                setSpot={setSpot}
                spots={props.spots}
                isSpotToEdit={false}
                mapHeight={mapHeight}
            />

            <Form onSubmit={onSaveSpot}>
                <FormTextField
                    type="text"
                    placeholder="Name your spot"
                    required
                    value={spot.name}
                    onChange={(event) => setSpot({ ...spot, name: event.target.value })}
                />
                <SaveButton type="submit">Save</SaveButton>
            </Form>
        </AddSpotContainer>
    );
}
