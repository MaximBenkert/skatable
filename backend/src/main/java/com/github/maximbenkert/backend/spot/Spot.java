package com.github.maximbenkert.backend.spot;

public record Spot(
        String id,
        Coordinates coordinates,
        String name
) {
}
