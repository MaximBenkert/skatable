import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import styled from "styled-components";
import SpotMapComponent from "./SpotMapComponent";
import { Spot } from "../models/Spot";

const AddSpotContainer = styled.div`
  background-color: #9cbac6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: #6699cc;
`;

const FormTextField = styled(TextField)`
  && {
    color: #6699cc;
    margin: 1rem 0;
  }
`;

const SaveButton = styled.button`
  background-color: #6699cc;
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
    const mapHeight = `calc(100vh - 244px)`;

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
                    label="Name your spot"
                    required
                    value={spot.name}
                    onChange={(event) => setSpot({ ...spot, name: event.target.value })}
                />
                <SaveButton type="submit">Save</SaveButton>
            </Form>
        </AddSpotContainer>
    );
}
