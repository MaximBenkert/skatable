package com.github.maximbenkert.backend.spot;

import java.util.UUID;

public record SpotDTO(Coordinates coordinates, String name) {
    public Spot toSpot() {
        String id = UUID.randomUUID().toString();

        return new Spot(id, coordinates, name);
    }
}