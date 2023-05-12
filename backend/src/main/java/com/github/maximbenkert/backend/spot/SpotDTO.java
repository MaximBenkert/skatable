package com.github.maximbenkert.backend.spot;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record SpotDTO(
        String id,
        Coordinates coordinates,
        @NotBlank
        @Size(min = 3, max = 32)
        String name) {


}