import React, { Dispatch, FormEvent, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Spot } from "../models/Spot";
import SpotMapComponent from "./SpotMapComponent";

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

const NameInput = styled.input`
  width: 80%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #b7e2d9;
  border-radius: 5px;
`;

const UpdateButton = styled.button`
  background-color: #1bbea0;
  color: #fff;
  width: 80%;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const DeleteButton = styled.button`
  background-color: #e7330a;
  color: #fff;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d00;
  }
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
                mapHeight={mapHeight}
            />
            <FormContainer onSubmit={onUpdateSpot}>
                <NameInput
                    type="text"
                    placeholder="Name"
                    value={props.spot.name}
                    onChange={(event) =>
                        props.setSpot({ ...props.spot, name: event.target.value })
                    }
                />
                <UpdateButton type="submit">Update</UpdateButton>
                <DeleteButton onClick={onDeleteClick}>Delete</DeleteButton>
            </FormContainer>
        </EditSpotContainer>
    );
}
