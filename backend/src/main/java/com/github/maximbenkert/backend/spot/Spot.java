package com.github.maximbenkert.backend.spot;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("spots")
public record Spot(
        @Id
        String id,
        Coordinates coordinates,
        String name
) {
}
