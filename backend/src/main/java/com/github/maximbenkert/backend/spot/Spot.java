package com.github.maximbenkert.backend.spot;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Document("spots")
public record Spot(
        @Id
        String id,
        @NotBlank
        @Size (min = 3, max = 32)
        Coordinates coordinates,
        String name
) {
        /*Spot(
                Coordinates coordinates,
                String name
        ){
                this(null, coordinates, name);
        }
        public Spot withId(String id) {
                return new Spot (id, coordinates, name);
        }*/
}
