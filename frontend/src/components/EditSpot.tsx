import React, { Dispatch, FormEvent, SetStateAction, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import SpotMapComponent from "./SpotMapComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import {Spot} from "../models/Spot";
import './Form.css'

const EditSpotContainer = styled.div`
  background-color: #9cbac6;
  display: flex;
  flex-direction: column;
  height: 80%;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #6699cc;
  border-radius: 10px;
  height: 40%;
`;

const NameInput = styled(TextField)`
  width: 80%;
`;

const UpdateButton = styled(Button)`
  background-color: #333;
  color: #fff;
  width: 80%;

`;

const DeleteButton = styled(Button)`
  background-color: #ff0000;
  color: #fff;
  
`;

type EditProps = {
    loadSpotById: (id: string) => void;
    updateSpot: (spot: Spot) => void;
    spot: Spot;
    setSpot: Dispatch<SetStateAction<Spot>>;
    spots: Spot[];
    deleteSpot: (id: string) => void;
};

export default function EditSpot(props: EditProps) {
    const { id } = useParams();
    const navigate = useNavigate();
    const mapHeight: string = `60%`;

    useEffect(() => {
        if (id) {
            props.loadSpotById(id);
        }
        // eslint-disable-next-line
    }, [id]);

    function onUpdateSpot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (id) {
            props.updateSpot(props.spot);
            navigate("/gallery");
        }
    }

    function onDeleteClick() {
        const confirmed = window.confirm("Are you sure you want to delete the spot?");
        if (confirmed) {
            props.deleteSpot(props.spot.id);
            navigate("/");
        }
    }

    return (
        <EditSpotContainer>

                <SpotMapComponent
                    spot={props.spot}
                    setSpot={props.setSpot}
                    spots={props.spots}
                    isSpotToEdit={true}
                    mapHeight={mapHeight} />

            <FormContainer onSubmit={onUpdateSpot}>
                <NameInput
                    label="Name"
                    value={props.spot.name}
                    onChange={(event) => props.setSpot({ ...props.spot, name: event.target.value })} />
                <UpdateButton variant="contained" type="submit">
                    Update
                </UpdateButton>
                <DeleteButton onClick={onDeleteClick} endIcon={<DeleteIcon />}>
                    Delete
                </DeleteButton>
            </FormContainer>
        </EditSpotContainer>
    );
}
