package com.github.maximbenkert.backend.spot;

import org.springframework.data.annotation.Id;

public record Spot(
        @Id
        String id,
        Coordinates coordinates,
        String name
) {
}
