package com.github.maximbenkert.backend.spot;


import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/spots")
@RequiredArgsConstructor
public class SpotController {
    private final SpotService spotService;

    @GetMapping
    List<Spot> getAllSpots(){
        return spotService.getAllSpots();
    }

    @PostMapping
    Spot addSpot(@RequestBody @Valid SpotDTO spotDTO) {
        return spotService.addSpot(spotDTO);
    }
    @GetMapping("/{id}")
    Spot getSpotById(@PathVariable String id) {
        return spotService.getSpotById(id);
    }
    @DeleteMapping("/{id}")
    void deleteSpotById(@PathVariable String id) {
        if (id.isBlank()) {
            throw new IllegalArgumentException("ID is empty");
        }
        spotService.deleteSpotById(id);
    }



}
