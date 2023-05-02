package com.github.maximbenkert.backend.spot;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Document("spots")
public record Spot(
        @Id
        String id,
        Coordinates coordinates,
        @NotBlank
        @Size (min = 3, max = 32)
        String name
) {
}
